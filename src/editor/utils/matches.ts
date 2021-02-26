import { Editor, Point, Range } from "slate";

interface EditorRangeMatch {
    range: Range | undefined;
    text: string | undefined;
    match: "" | RegExpMatchArray | null | undefined;
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