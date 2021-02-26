import { useCallback, useEffect, useState } from "react";
import { Editor, Path, Range, Transforms } from 'slate';

import { matchBefore } from './../../utils/matches';
import { insertTemplateBlock } from './transforms/InsertTemplateBlock';
import { isTemplateBlock } from './transforms/NavigateTemplates';

export const useTemplates = (editor: Editor) => {
    const [target, setTarget] = useState<Range | null>();
    const [insertTemplate, setInsertTemplate] = useState(false);
    const [replaceText, setReplaceText] = useState("");

    // useEffect hook for inserting template tags
    useEffect(() => {
        if (!!target && insertTemplate) {
            Transforms.select(editor, target!);
            switch (replaceText) {
                case "{{":
                    insertTemplateBlock(editor, {templateType: "select"})
                    break;
                case "[[":
                    insertTemplateBlock(editor, {templateType: "multiselect"})
                    break;
                case "@@":
                    insertTemplateBlock(editor, {templateType: "date"})
                    break;
                case "**":
                    insertTemplateBlock(editor, {templateType: "void"})
                    break;
                case "##":
                    insertTemplateBlock(editor, {templateType: "number"})
                    break;
                case "$$":
                    insertTemplateBlock(editor, {templateType: "expr"})
            }
            setInsertTemplate(false);
            setTarget(null);
        }
        // eslint-disable-next-line
    }, [insertTemplate])

    const onChangeTemplates = useCallback((editor: Editor) => {
        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection)
            const {range, match, text} = matchBefore(editor, start, /[{[@*#$]{2}/, {distance: 2});
            if (match) {
                setTarget(range);
                setReplaceText(text!);
                setInsertTemplate(true);
            }
        }
    }, [target, insertTemplate])
    
    const focusActiveTemplate = useCallback((event: React.KeyboardEvent, editor: Editor) => {
        const { selection } = editor;
        if (selection && event.key === "Enter") {
            event.preventDefault();
            const [currentNode, currentPath] = Editor.node(editor, selection);
            if (isTemplateBlock(editor, currentPath)) {
                Transforms.setNodes(editor, { activeInput: true }, {at: Path.parent(currentPath)})
                console.log("Should somehow focus the ref on the contained input now", Editor.node(editor, Path.parent(currentPath)))
            }
        }
    }, [])
    
    return {onChangeTemplates, focusActiveTemplate}
}