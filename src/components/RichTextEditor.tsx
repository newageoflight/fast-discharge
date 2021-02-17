import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { createEditor, Editor, Location, Node, Range, Transforms } from "slate";
import { withHistory } from "slate-history";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css"

import { withEditList, onKeyDown as listKeyDown, indentListItem, dedentListItem } from "./../editor/lists"
import { hotkeyHandler } from '../editor/handlers'
import { toClipboardHTML, toClipboardMD } from "../editor/seralise";
import { withVoids } from './../wraps/VoidBlocks';
import { insertTemplateBlock } from "./TemplateBlock";
import { InitialState } from "./../context/InitialState";

import { Element } from './utils/Element';
import { Leaf } from './utils/Leaf';
import { MarkButton } from "./buttons/MarkButton";
import { BlockButton } from "./buttons/BlockButton";
import { ListButton } from "./buttons/ListButton";
import { Toolbar } from './Toolbar'
import { FunctionButton } from "./buttons/FunctionButton";
import { HoverMenu } from "./HoverMenu";
import { matchAfter, matchBefore } from './../editor/utils';
import { DotAbbrevsState } from './../context/DotAbbrevs';
import { HoverList } from './HoverList';
import { downloadFile, uploadSingleFile } from './../utils/fileHandling';

export const RichTextEditor: React.FC = () => {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState<Node[]>(JSON.parse((localStorage.getItem("content") as string)) || InitialState);
    const [target, setTarget] = useState<Range | null>();
    const [fragmentTarget, setFragmentTarget] = useState<Range | null>();
    const [index, setIndex] = useState(0);
    const [search, setSearch] = useState("");
    const abbrevs = useRecoilValue(DotAbbrevsState);
    const [insertTemplate, setInsertTemplate] = useState(false);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    const editor = useMemo(() => withHistory(withReact(withEditList(withVoids(createEditor())))), [])
    
    const searchedAbbrevs = Object.fromEntries(Object.entries(abbrevs).filter(([key]) => 
        (search !== "$") ? key.toLowerCase().startsWith(search.toLowerCase()) : !!key
    ));

    // useEffect hook for inserting template tags
    useEffect(() => {
        if (!!target && insertTemplate) {
            Transforms.select(editor, target!);
            insertTemplateBlock(editor, {})
            setInsertTemplate(false);
            setTarget(null);
        }
        // eslint-disable-next-line
    }, [insertTemplate])
    
    // useEffect hook for fragment insertion dropdowns
    useEffect(() => {
        if (fragmentTarget && Object.keys(searchedAbbrevs).length > 0) {
            // console.log("Dotabbrev searcher should display")
            // console.log(search, searchedAbbrevs)
            const el = searchRef.current;
            const domRange = ReactEditor.toDOMRange(editor, fragmentTarget);
            const rect = domRange.getBoundingClientRect();
            el!.style.top = `${rect.top + window.pageYOffset + 24}px`
            el!.style.left = `${rect.left + window.pageXOffset}px`
        }
    }, [searchedAbbrevs, editor, index, search, fragmentTarget])
    
    const exportTemplateAsFile = () => downloadFile(new Blob([JSON.stringify(editor.children)], {type: "application/json"}), "template.fdt")

    const loadTemplateFromFile = () => uploadSingleFile((file, fr) => {
        fr.readAsText(file);
        fr.onload = event => {
            let loaded = JSON.parse((event.target!.result as string));
            setValue(loaded);
        }
    })
    
    // fragment insertion keydown handler
    const onKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            if (fragmentTarget) {
                switch (event.key) {
                    case "ArrowDown":
                        event.preventDefault();
                        const prevIndex = index >= Object.keys(searchedAbbrevs).length - 1 ? 0 : index + 1
                        setIndex(prevIndex);
                        break;
                    case "ArrowUp":
                        event.preventDefault();
                        const nextIndex = index <= 0 ? Object.keys(searchedAbbrevs).length - 1 : index - 1
                        setIndex(nextIndex);
                        break;
                    case "Tab":
                    case "Enter":
                        event.preventDefault();
                        Transforms.select(editor, (fragmentTarget as Location));
                        let keyToGet = Object.keys(searchedAbbrevs)[index]
                        let fragmentToInsert = abbrevs[keyToGet]
                        Editor.insertFragment(editor, fragmentToInsert);
                        setFragmentTarget(null);
                        break;
                    case "Escape":
                        event.preventDefault();
                        setFragmentTarget(null);
                        break;
                }
            }
        },
        [index, search, fragmentTarget],
    )
    
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
                const wordBefore = Editor.before(editor, start, {unit: "word"})
                const wordBeforeMatch = wordBefore && matchBefore(editor, wordBefore, /^\.(\w+|\$)$/, {}, start)
                let beforeWordRange, beforeWordText, beforeWordMatch;
                if (wordBeforeMatch) {
                    beforeWordRange = wordBeforeMatch.range;
                    beforeWordText = wordBeforeMatch.text;
                    beforeWordMatch = wordBeforeMatch.match;
                }
                // let {range: beforeWordRange, text: beforeWordText, match: beforeWordMatch} = wordBeforeMatch;
                const {match: afterMatch} = matchAfter(editor, start, /^(\s|$)/)
                const {range: beforeTwoCharsRange, match: beforeTwoCharsMatch} = matchBefore(editor, start, /\{\{/, {distance: 2})
                // console.log(beforeWordMatch, beforeWordText, beforeWordRange)
                if (beforeTwoCharsMatch) {
                    setTarget(beforeTwoCharsRange);
                    setInsertTemplate(true);
                }
                if (beforeWordMatch && afterMatch) {
                    setFragmentTarget(beforeWordRange)
                    setSearch(beforeWordMatch[1]);
                    setIndex(0);
                    return;
                }
            }

            setFragmentTarget(null);
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
            <HoverMenu />
            <SimpleBar className="editor">
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    onKeyDown={e => {
                        // console.log(Editor.node(editor, editor.selection))
                        onKeyDown(e);
                        listKeyDown(editor)(e);
                        hotkeyHandler(e, editor);
                    }}
                    onSelect={e => {
                        // thanks:
                        // https://github.com/ianstormtaylor/slate/issues/3750
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
            {fragmentTarget && Object.keys(searchedAbbrevs).length > 0 && (
                <HoverList opts={Object.keys(searchedAbbrevs)} pos={index} ref={searchRef} />
            )}
        </Slate>
    )
}
