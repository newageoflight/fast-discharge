import { Editor, Transforms, Element as SlateElement, Node, NodeEntry, Path } from 'slate';
import { LIST_TYPES, HOTKEYS, BLOCK_HOTKEYS } from './EditorConsts';
import { isHotkey } from 'is-hotkey';

export const hotkeyHandler = (event: any, editor: Editor) => {
    for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const mark = HOTKEYS[hotkey]
            toggleMark(editor, mark)
        }
    }
    for (const hotkey in BLOCK_HOTKEYS) {
        if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const block = BLOCK_HOTKEYS[hotkey]
            toggleBlock(editor, block)
        }
    }
}

export const toggleBlock = (editor: Editor, format: string) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n.type as string),
        split: true
    })

    const newProperties: Partial<SlateElement> = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes(editor, newProperties)
    
    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

export const toggleMark = (editor: Editor, format: string) => {
    const isActive = isMarkActive(editor, format)

    if (isActive)
        Editor.removeMark(editor, format)
    else
        Editor.addMark(editor, format, true)
}

export const isBlockActive = (editor: Editor, format: string) => {
    const [match] = Editor.nodes(editor, {
        match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
        
    return !!match
}

export const isMarkActive = (editor: Editor, format: string) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false
}

export const indentListItem = (editor: Editor): void => {
    let pathToCurrentItem = editor.selection!
    let currentPointPosition = pathToCurrentItem.focus
    let listItemPath = currentPointPosition.path.slice(0, currentPointPosition.path.length - 2)

    let previousSiblingNodeEntry = Editor.previous(editor, {at: listItemPath}) as NodeEntry;
    if (!!previousSiblingNodeEntry) {
        let [previousSiblingNode, previousSiblingPath] = previousSiblingNodeEntry;

        let hasListChildren = false, listChildPos: Path = [], childrenCount = 0;
        
        for (let [child, pos] of Node.children(previousSiblingNode, [])) {
            if (child.type === "bulleted-list" || child.type === "numbered-list") {
                hasListChildren = true;
                listChildPos = pos;
            }
            ++childrenCount;
        }

        if (!hasListChildren) {
            let [parentNode] = Editor.node(editor, listItemPath.slice(0, listItemPath.length-1))
            let parentType = parentNode.type;
            Transforms.wrapNodes(editor, {type: parentType, children: []} as SlateElement, {at: listItemPath})
            Editor.withoutNormalizing(editor, () => Transforms.moveNodes(editor, {
                at: listItemPath,
                to: previousSiblingPath.concat([childrenCount])
            }))
        } else {
            let absoluteChildPath = previousSiblingPath.concat(listChildPos);
            let [absoluteChildNode] = Editor.node(editor, absoluteChildPath) as NodeEntry;
            let absoluteNodeChildren = absoluteChildNode.children as Node[];
            Editor.withoutNormalizing(editor, () => Transforms.moveNodes(editor, {
                at: listItemPath,
                to: absoluteChildPath.concat([absoluteNodeChildren.length])
            }))
        }
    }
}

export const dedentListItem = (editor: Editor): void => {
    let pathToCurrentItem = editor.selection!
    let currentPointPosition = pathToCurrentItem.focus
    let listItemPath = currentPointPosition.path.slice(0, currentPointPosition.path.length - 2)
    
    if (listItemPath.length > 2) {
        let [originalParentNode] = Editor.node(editor, listItemPath.slice(0, listItemPath.length-1)) as NodeEntry;
        let originalParentChildren = originalParentNode.children as Node[];
        let origin = listItemPath;

        if (originalParentChildren.length === 1) {
            Transforms.unwrapNodes(editor, {at: listItemPath.slice(0, listItemPath.length - 1)})
            origin = listItemPath.slice(0, listItemPath.length - 1)
        }
        
        let destination = listItemPath.slice(0, listItemPath.length - 2)
        destination[destination.length-1]++
        Editor.withoutNormalizing(editor, () => Transforms.moveNodes(editor, {
            at: origin,
            to: destination
        }))
    }
}