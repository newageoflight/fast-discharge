import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Editor, Location, Node, Range, Transforms } from "slate";
import { withHistory } from "slate-history";

import { hotkeyHandler } from '../editor/handlers'
import { indentListItem, dedentListItem } from '../editor/utils';
import { withVoids } from './../wraps/VoidBlocks';
import { insertTemplateBlock } from "./TemplateBlock";

import { Element } from './Element';
import { Leaf } from './Leaf';
import { MarkButton } from "./MarkButton";
import { BlockButton } from "./BlockButton";
import { Toolbar } from './Toolbar'
import { FunctionButton } from "./FunctionButton";

// TODO: add an onChange handler to the editor that will replace any detected {{ elements with a template maker dropdown
// the template maker dropdown should just be an editable void that has the ability to take a name input and add some options
// TODO: add the ability to import and save templates as MD files
// TODO: add the ability to use the tab key to navigate through templates

export const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState<Node[]>(InitialState);
    const [target, setTarget] = useState<Location | null>();
    const [insertTemplate, setInsertTemplate] = useState(false);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(withVoids(createEditor()))), [])
    
    // useEffect hook for inserting template tags
    useEffect(() => {
        if (!!target && insertTemplate) {
            Transforms.select(editor, target!);
            insertTemplateBlock(editor, {})
            setInsertTemplate(false);
            setTarget(null);
        }
    }, [target])
    
    return (
        <Slate editor={editor} value={value} onChange={value => {
            console.log(editor.children)
            setValue(value);

            const { selection } = editor;
            // if nothing is currently selected under the cursor
            if (selection && Range.isCollapsed(selection)) {
                const [start] = Range.edges(selection);
                // if the two characters beforce the cursor are {{, select them and replace with a template block
                const before = Editor.before(editor, start, {distance: 2})
                const beforeRange = before && Editor.range(editor, before, start)
                const beforeText = beforeRange && Editor.string(editor, beforeRange)
                const beforeMatch = beforeText && beforeText.match(/\{\{/);
                if (beforeMatch) {
                    setInsertTemplate(true);
                    setTarget(beforeRange as Location);
                }
            }
        }}>
            <Toolbar>
                <MarkButton format="bold" icon="gridicons:bold" alt="Bold (Ctrl+B)" />
                <MarkButton format="italic" icon="gridicons:italic" alt="Italic (Ctrl+I)" />
                <MarkButton format="underline" icon="gridicons:underline" alt="Underline (Ctrl+U)" />
                <BlockButton format="heading-one" icon="gridicons:heading-h1" alt="Heading 1 (Ctrl+Alt+1)" />
                <BlockButton format="heading-two" icon="gridicons:heading-h2" alt="Heading 2 (Ctrl+Alt+2)" />
                <BlockButton format="heading-three" icon="gridicons:heading-h3" alt="Heading 3 (Ctrl+Alt+3)" />
                <BlockButton format="heading-four" icon="gridicons:heading-h4" alt="Heading 4 (Ctrl+Alt+4)" />
                <BlockButton format="bulleted-list" icon="ic:baseline-format-list-bulleted" alt="Bulleted list (Ctrl+.)" />
                <BlockButton format="numbered-list" icon="ic:baseline-format-list-numbered" alt="Numbered list (Ctrl+/)" />
                <FunctionButton fn={indentListItem} icon="bx:bx-right-indent" alt="Indent list item (Ctrl+])" />
                <FunctionButton fn={dedentListItem} icon="bx:bx-left-indent" alt="Dedent list item (Ctrl+[)" />
                <FunctionButton fn={(editor: Editor) => insertTemplateBlock(editor, {})} icon="uil:brackets-curly" alt="Insert a template block (type in {{)" />
            </Toolbar>
            <div className="editor">
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    onKeyDown={e => hotkeyHandler(e, editor)}
                />
            </div>
        </Slate>
    )
}

const InitialState = [
    {
        type: "paragraph",
        children: [{text: ""}]
    },
]