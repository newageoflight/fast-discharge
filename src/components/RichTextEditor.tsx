import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { createEditor, Editor, Location, Node, Range, Transforms } from "slate";
import { withHistory } from "slate-history";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css"

import { withEditList, onKeyDown as listKeyDown, indentListItem, dedentListItem } from "./../editor/lists"
import { hotkeyHandler } from '../editor/handlers'
import { withVoids } from './../wraps/VoidBlocks';
import { insertTemplateBlock } from "./TemplateBlock";
import { InitialState } from "./../context/InitialState";

import { Element } from './Element';
import { Leaf } from './Leaf';
import { MarkButton } from "./MarkButton";
import { BlockButton } from "./BlockButton";
import { ListButton } from "./ListButton";
import { Toolbar } from './Toolbar'
import { FunctionButton } from "./FunctionButton";
import { toClipboardHTML, toClipboardMD } from "../editor/seralise";

export const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState<Node[]>(JSON.parse((localStorage.getItem("content") as string)) || InitialState);
    const [target, setTarget] = useState<Location | null>();
    const [insertTemplate, setInsertTemplate] = useState(false);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    const editor = useMemo(() => withHistory(withReact(withEditList(withVoids(createEditor())))), [])
    
    // useEffect hook for inserting template tags
    useEffect(() => {
        if (!!target && insertTemplate) {
            Transforms.select(editor, target!);
            insertTemplateBlock(editor, {})
            setInsertTemplate(false);
            setTarget(null);
        }
        // eslint-disable-next-line
    }, [target])
    
    const exportTemplateAsFile = () => {
        const blob = new Blob([JSON.stringify(editor.children)], {type: "application/json"})
        const fileDownloadUrl = URL.createObjectURL(blob);
        let tempLink = document.createElement("a")
        tempLink.href = fileDownloadUrl;
        tempLink.setAttribute("download", "template.fdt")
        tempLink.setAttribute("target", "_blank")
        tempLink.click()
        tempLink.remove()
    }
    
    const loadTemplateFromFile = () => {
        // see here: 
        // https://codepen.io/rkotze/pen/zjRXYr
        // https://stackoverflow.com/questions/57007536/react-js-reading-from-a-local-file
        // console.log("File popup should now appear")
        const fileSelector = document.createElement("input");
        fileSelector.setAttribute("type", "file")
        fileSelector.click()
        fileSelector.addEventListener("change", event => {
            if (fileSelector.files && fileSelector.files.length >= 1) {
                let file = fileSelector.files![0], fr = new FileReader();
                fr.readAsText(file)
                fr.onload = event => {
                    let loaded = JSON.parse((event.target!.result as string))
                    setValue(loaded)
                }
            }
        })
    }
    
    return (
        <Slate editor={editor} value={value} onChange={value => {
            setValue(value);
            const content = JSON.stringify(value);
            localStorage.setItem("content", content)
            // console.log(value)

            // you should be able to replace this code block with this addon:
            // https://github.com/ianstormtaylor/slate-plugins/tree/master/packages/slate-auto-replace
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
                <ListButton format="bulleted-list" icon="ic:baseline-format-list-bulleted" alt="Bulleted list (Ctrl+.)" />
                <ListButton format="numbered-list" icon="ic:baseline-format-list-numbered" alt="Numbered list (Ctrl+/)" />
                <FunctionButton fn={indentListItem} icon="bx:bx-right-indent" alt="Indent list item (Tab)" />
                <FunctionButton fn={dedentListItem} icon="bx:bx-left-indent" alt="Dedent list item (Shift-Tab)" />
                <FunctionButton fn={(editor: Editor) => insertTemplateBlock(editor, {})} icon="uil:brackets-curly" alt="Insert a template block (type in {{)" />
                <FunctionButton fn={toClipboardMD} icon="ion:copy-outline" alt="Copy to clipboard as plain text (Markdown)" />
                <FunctionButton fn={toClipboardHTML} icon="ion:copy" alt="Copy to clipboard as rich text" />
                <FunctionButton fn={exportTemplateAsFile} icon="bx:bxs-download" alt="Save current template/contents as file" />
                <FunctionButton fn={loadTemplateFromFile} icon="ic:baseline-file-upload" alt="Open a template/document from a file" />
            </Toolbar>
            <SimpleBar className="editor">
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    onKeyDown={e => {
                        // console.log(Editor.node(editor, editor.selection))
                        listKeyDown(editor)(e)
                        hotkeyHandler(e, editor)
                    }}
                    onSelect={e => {
                        if (!(window as any).chrome)
                            return
                        if (editor.selection == null)
                            return
                        
                        try {
                            const domPoint = ReactEditor.toDOMPoint(
                                editor,
                                editor.selection.focus
                            )
                            const node = domPoint[0];
                            if (node == null) return;
                            const element = node.parentElement;
                            if (element == null) return;
                            element.scrollIntoView({behavior: "smooth", block: 'nearest'})
                        } catch (e) {

                        }
                    }}
                />
            </SimpleBar>
        </Slate>
    )
}
