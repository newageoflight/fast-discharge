import { Editor, Element as SlateElement, Node, NodeEntry, Path, Transforms } from 'slate';
import { LIST_TYPES } from './consts';
// Don't reinvent the wheel, see if you can just slap this one on top:
// https://www.npmjs.com/package/@productboard/slate-edit-list

// TODO: fix indenting and dedenting
// text nodes are considered leaves and leaves can't be on the same level as elements
// we'll just have to use ul > ul nesting rather than ul > li > ul nesting
export const ListHelpers = {
    listItemPath(editor: Editor): Path {
        let pathToCurrentItem = editor.selection!
        let currentPointPosition = pathToCurrentItem.focus
        return currentPointPosition.path.slice(0, currentPointPosition.path.length-1)
    },
    
    currentNodeEntry(editor: Editor): NodeEntry {
        return Editor.node(editor, editor.selection!);
    },
    
    previousSiblingNodeEntry(editor: Editor): NodeEntry {
        return Editor.previous(editor, {at: ListHelpers.listItemPath(editor)}) as NodeEntry;
    },
    
    nextSiblingNodeEntry(editor: Editor): NodeEntry {
        return Editor.next(editor, {at: ListHelpers.listItemPath(editor)}) as NodeEntry;
    },
    
    parentNodeEntry(editor: Editor): NodeEntry {
        return Editor.parent(editor, ListHelpers.listItemPath(editor));
    },

    childNodeEntry(editor: Editor, pos: number): NodeEntry {
        let [currentNode, currentPath] = ListHelpers.currentNodeEntry(editor);
        let childEntry = Node.child(currentNode, pos);
        return [childEntry, currentPath.concat([pos])] as NodeEntry;
    },
}


export const indentListItem = (editor: Editor): void => {
    let listItemPath = ListHelpers.listItemPath(editor)

    let previousSiblingNodeEntry = ListHelpers.previousSiblingNodeEntry(editor);
    let [previousSiblingNode, previousSiblingPath] = previousSiblingNodeEntry;
    console.log(editor.children, listItemPath)
    // if a previous sibling exists, is it a list type?
    if (!!previousSiblingNodeEntry) {
        let {type: previousSiblingNodeType} = previousSiblingNode;

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
            let {type: parentType} = parentNode;
            Transforms.wrapNodes(editor, {type: parentType, children: []} as SlateElement, {at: listItemPath})
        } else {
            let absoluteChildPath = previousSiblingPath.concat(listChildPos);
            let [absoluteChildNode] = Editor.node(editor, absoluteChildPath) as NodeEntry;
            let absoluteNodeChildren = absoluteChildNode.children as Node[];
            // for some bizarre reason, using insert works, but move doesn't
            let destinationPath = absoluteChildPath.concat([absoluteNodeChildren.length])
            console.log(editor.children)
            console.log(listItemPath, absoluteChildNode)
            console.log(destinationPath)
            let [originNode] = Editor.node(editor, listItemPath)
            console.log(originNode)
            Transforms.insertNodes(editor, originNode, {at: destinationPath})
            Transforms.removeNodes(editor, {at: listItemPath})
            // Editor.withoutNormalizing(editor, () => Transforms.moveNodes(editor, {
            //     at: listItemPath,
            //     to: absoluteChildPath.concat([absoluteNodeChildren.length])
            // }))
        }
    }
}

export const dedentListItem = (editor: Editor): void => {
    let pathToCurrentItem = editor.selection!
    let currentPointPosition = pathToCurrentItem.focus
    let listItemPath = currentPointPosition.path.slice(0, currentPointPosition.path.length - 1)
    
    if (listItemPath.length > 2) {
        let [originalParentNode] = Editor.node(editor, listItemPath.slice(0, listItemPath.length-1)) as NodeEntry;
        let originalParentChildren = originalParentNode.children as Node[];
        let origin = listItemPath;

        if (originalParentChildren.length === 1) {
            Transforms.unwrapNodes(editor, {at: listItemPath.slice(0, listItemPath.length - 1)})
            origin = listItemPath.slice(0, listItemPath.length - 1)
        }
        
        let destination = listItemPath.slice(0, listItemPath.length - 1)
        destination[destination.length-1]++
        console.log(editor.children)
        console.log(origin, destination)
        Editor.withoutNormalizing(editor, () => Transforms.moveNodes(editor, {
            at: origin,
            to: destination
        }))
        // bizarrely, move isn't working here either so here's the fix i came up with
        // let [originNode] = Editor.node(editor, origin)
        // Transforms.insertNodes(editor, originNode, {at: destination})
        // Transforms.removeNodes(editor, {at: destination})
    }
}
