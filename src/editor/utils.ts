import { Editor, Transforms, Element as SlateElement, Point, Range } from 'slate';
import { LIST_TYPES } from './consts';

interface EditorRangeMatch {
    range: Range | undefined;
    text: string | undefined;
    match: "" | RegExpMatchArray | null | undefined;
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

export const matchBefore = (editor: Editor, start: Point, match: RegExp, beforeOpts?: any, end?: Point): EditorRangeMatch => {
    const rangeEnd = end || start;
    const before = Editor.before(editor, start, beforeOpts)
    const beforeRange = before && Editor.range(editor, before, rangeEnd);
    const beforeText = beforeRange && Editor.string(editor, beforeRange);
    const beforeMatch = beforeText && beforeText.match(match);
    return {range: beforeRange, text: beforeText, match: beforeMatch};
}

export const matchAfter = (editor: Editor, start: Point, match: RegExp, afterOpts?: any): EditorRangeMatch => {
    const after = Editor.after(editor, start, afterOpts);
    const afterRange = Editor.range(editor, start, after);
    const afterText = Editor.string(editor, afterRange);
    const afterMatch = afterText.match(match);
    return {range: afterRange, text: afterText, match: afterMatch};
}