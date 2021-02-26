import { BalloonToolbar, EditablePlugins, HeadingToolbar, pipe, SlateDocument, ToolbarButton, ToolbarElement, ToolbarList, ToolbarMark } from '@udecode/slate-plugins';
import React, { useMemo, useState } from 'react'
import { useRecoilState } from 'recoil';
import { createEditor, Node, Transforms } from 'slate';
import { Slate } from 'slate-react';
import { InlineIcon } from "@iconify/react-with-api";
import SimpleBar from 'simplebar-react';
import Modal from "react-modal";
import "simplebar/dist/simplebar.min.css"
import "tippy.js/themes/light-border.css"

import { plugins, withPlugins } from '../editor/config';
import { useTemplates } from './../editor/newPlugins/TemplateBlocks/useTemplates';
import { FragmentInserterMenu } from '../editor/newPlugins/FragmentInserter/components/FragmentInserterMenu';
import { useFragmentInserter } from '../editor/newPlugins/FragmentInserter/useFragmentInserter';
import { DotAbbrevsState } from './../context/DotAbbrevs';
import { saveDotAbbrev } from './../editor/newPlugins/FragmentInserter/transforms/DotAbbreviations';
import { toClipboardHTML, toClipboardMD } from '../editor/utils/serialise';
import { FunctionButtonsContainer } from './FunctionButtonsContainer';
import { OneLine } from './OneLine';
import { downloadFile, uploadSingleFile } from './../utils/fileHandling';
import { EditorVariablesState, findTemplateVariables } from './../context/EditorContent';

Modal.setAppElement("#root");

const initialValue: Node[] = [
    {
        type: "p",
        children: [
            {
                text: "This is just some text",
            }
        ]
    }
]

export const TextEditor: React.FC = () => {
    const startingState = JSON.parse(localStorage.getItem("content") as string) || initialValue;
    const [value, setValue] = useState<Node[]>(startingState);
    const [dotAbbrevs, setDotAbbrevs] = useRecoilState(DotAbbrevsState);
    const [templateVars, setTemplateVars] = useRecoilState(EditorVariablesState);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);
    
    const { onChangeTemplates } = useTemplates(editor);
    const { target, index, search, searchedAbbrevs, onInsertFragment, onChangeFragmentInserter, onKeyDownFragmentInserter } = useFragmentInserter(dotAbbrevs);

    const exportTemplateAsFile = () => downloadFile(new Blob([JSON.stringify(editor.children)], {type: "application/json"}), "template.fdt")
    
    const exportAbbrevsAsFile = () => downloadFile(new Blob([JSON.stringify(dotAbbrevs)], {type: "application/json"}), "abbreviations.fda")

    const loadTemplateFromFile = () => uploadSingleFile((file, fr) => {
        fr.readAsText(file);
        fr.onload = event => {
            let loaded = JSON.parse((event.target!.result as string));
            setValue(loaded);
        }
    }, ["fdt"])
    
    const loadAbbrevsFromFile = () => uploadSingleFile((file, fr) => {
        fr.readAsText(file);
        fr.onload = event => {
            let loaded = JSON.parse((event.target!.result as string));
            setDotAbbrevs(loaded);
        }
    }, ["fda"])

    return (
        <>
            <Slate editor={editor} value={value} onChange={newValue => {
                setValue(newValue as SlateDocument);
                const content = JSON.stringify(value);
                localStorage.setItem("content", content)
                let vars = findTemplateVariables(editor);
                setTemplateVars(vars);

                onChangeFragmentInserter(editor);
                onChangeTemplates(editor);
            }}>
                <HeadingToolbar styles={{
                    root: {
                        padding: '1px 3px',
                        margin: 0,
                        display: "flex",
                        justifyContent: "space-between",
                    }
                }}>
                    <FunctionButtonsContainer>
                        <ToolbarMark type="bold" icon={<InlineIcon icon="mdi:format-bold" />} tooltip={{content: "Bold text (Ctrl+B)", theme: "light-border"}} />
                        <ToolbarMark type="italic" icon={<InlineIcon icon="mdi:format-italic" />} tooltip={{content: "Italicise text (Ctrl+I)", theme: "light-border"}} />
                        <ToolbarMark type="underline" icon={<InlineIcon icon="mdi:format-underline" />} tooltip={{content: "Underline text (Ctrl+U)", theme: "light-border"}}/>
                        <ToolbarMark type="subscript" clear="superscript" icon={<InlineIcon icon="mdi:format-subscript" />} tooltip={{content: "Subscript text (Ctrl+-)", theme: "light-border"}}/>
                        <ToolbarMark type="superscript" clear="subscript" icon={<InlineIcon icon="mdi:format-superscript" />} tooltip={{content: "Superscript text (Ctrl+=)", theme: "light-border"}}/>
                        <ToolbarElement type="h1" icon={<InlineIcon icon="mdi:numeric-1-box" />} tooltip={{content: "Set heading 1 (Ctrl+Alt+1)", theme: 'light-border'}}/>
                        <ToolbarElement type="h2" icon={<InlineIcon icon="mdi:numeric-2-box" />} tooltip={{content: "Set heading 2 (Ctrl+Alt+2)", theme: 'light-border'}}/>
                        <ToolbarElement type="h3" icon={<InlineIcon icon="mdi:numeric-3-box" />} tooltip={{content: "Set heading 3 (Ctrl+Alt+3)", theme: 'light-border'}}/>
                        <ToolbarElement type="h4" icon={<InlineIcon icon="mdi:numeric-4-box" />} tooltip={{content: "Set heading 4 (Ctrl+Alt+4)", theme: 'light-border'}}/>
                        <ToolbarElement type="h5" icon={<InlineIcon icon="mdi:numeric-5-box" />} tooltip={{content: "Set heading 5 (Ctrl+Alt+5)", theme: 'light-border'}}/>
                        <ToolbarElement type="h6" icon={<InlineIcon icon="mdi:numeric-6-box" />} tooltip={{content: "Set heading 6 (Ctrl+Alt+6)", theme: 'light-border'}}/>
                        <ToolbarList typeList="ul" icon={<InlineIcon icon="mdi:format-list-bulleted" />} tooltip={{content: "Set bulleted list (Ctrl+.)", theme: 'light-border'}} />
                        <ToolbarList typeList="ol" icon={<InlineIcon icon="mdi:format-list-numbered" />} tooltip={{content: "Set numbered list (Ctrl+/)", theme: 'light-border'}} />
                        <ToolbarButton onMouseDown={e => toClipboardMD(editor)} icon={<InlineIcon icon="ion:copy-outline" />} tooltip={{content: "Copy to clipboard as plain text/Markdown", theme: 'light-border'}} />
                        <ToolbarButton onMouseDown={e => toClipboardHTML(editor, plugins)} icon={<InlineIcon icon="ion:copy" />} tooltip={{content: "Copy to clipboard", theme: 'light-border'}} />
                        <ToolbarButton onMouseDown={e => {e.preventDefault(); Transforms.insertText(editor, ".$")}} icon={<InlineIcon icon="uil:brackets-curly" />} tooltip={{content: "Insert a snippet", theme: 'light-border'}} />
                        <ToolbarButton onMouseDown={e => exportTemplateAsFile()} icon={<InlineIcon icon="bx:bxs-download" />} tooltip={{content: "Save contents of editor to a file", theme: "light-border"}} />
                        <ToolbarButton onMouseDown={e => loadTemplateFromFile()} icon={<InlineIcon icon="ic:baseline-file-upload" />} tooltip={{content: "Load fdt file into editor", theme: "light-border"}} />
                    </FunctionButtonsContainer>
                    <div className="settings-buttons">
                        <ToolbarButton onMouseDown={e => setSettingsOpen(true)} icon={<InlineIcon icon="carbon:settings-adjust" />} tooltip={{content: "Settings", theme: "light-border"}} />
                    </div>
                </HeadingToolbar>
                <SimpleBar className="editor">
                    <EditablePlugins plugins={plugins} placeholder="Enter some text..."
                        onKeyDown={[onKeyDownFragmentInserter]} onKeyDownDeps={[index, target, search]}
                        spellCheck autoFocus />
                    <BalloonToolbar theme="dark" arrow={true}>
                        <ToolbarButton onMouseDown={e => saveDotAbbrev(editor, setDotAbbrevs)} icon={<InlineIcon icon="bi:dot" />} tooltip={{content: "Store selection as a snippet", theme: "light-border"}} />
                    </BalloonToolbar>
                    <FragmentInserterMenu at={target} pos={index} options={searchedAbbrevs} onClickItem={onInsertFragment} />
                </SimpleBar>
            </Slate>
            <Modal isOpen={settingsOpen} onRequestClose={() => setSettingsOpen(false)}>
                <OneLine>
                    <h1 style={{display: "inline-block", margin: 0}}>Settings</h1>
                    <button onClick={() => setSettingsOpen(false)}><InlineIcon icon="eva:close-fill" /></button>
                </OneLine>
                <h2>Abbreviations</h2>
                <p>Load my abbreviations: <button onClick={e => loadAbbrevsFromFile()}><InlineIcon icon="ic:baseline-file-upload" /></button></p>
                <p>Save my abbreviations: <button onClick={e => exportAbbrevsAsFile()}><InlineIcon icon="bx:bxs-download" /></button></p>
                <p>[this section under construction!]</p>
            </Modal>
        </>
    )
}
