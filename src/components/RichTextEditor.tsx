import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Node, Range } from "slate";
import { withHistory } from "slate-history";

import { BLOCK_HOTKEYS, FUNCTION_HOTKEYS, HOTKEYS } from '../utils/EditorConsts';
import { toggleMark } from "../utils/EditorUtils";

import { Element } from './Element';
import { Leaf } from './Leaf';
import { MarkButton } from "./MarkButton";
import { BlockButton } from "./BlockButton";
import { Toolbar } from './Toolbar'

// TODO: add an onChange handler to the editor that will replace any detected {{ elements with a template maker dropdown
// the template maker dropdown should just be an editable void that has the ability to take a name input and add some options
// TODO: add the ability to import and save templates as MD files
// TODO: add the ability to use the tab key to navigate through templates
import { toggleBlock } from './../utils/EditorUtils';

export const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState<Node[]>(InitialState);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate editor={editor} value={value} onChange={value => {
            setValue(value);

            const { selection } = editor;
            // if nothing is currently selected under the cursor
            if (selection && Range.isCollapsed(selection)) {
                const [start] = Range.edges(selection);
                // if the two characters before the cursor are {{, select them and replace with a template block
            }
        }}>
            <Toolbar>
                <MarkButton format="bold" icon="gridicons:bold" />
                <MarkButton format="italic" icon="gridicons:italic" />
                <MarkButton format="underline" icon="gridicons:underline" />
                <BlockButton format="heading-one" icon="gridicons:heading-h1" />
                <BlockButton format="heading-two" icon="gridicons:heading-h2" />
                <BlockButton format="heading-three" icon="gridicons:heading-h3" />
                <BlockButton format="heading-four" icon="gridicons:heading-h4" />
                <BlockButton format="bulleted-list" icon="ic:baseline-format-list-bulleted" />
                <BlockButton format="numbered-list" icon="ic:baseline-format-list-numbered" />
            </Toolbar>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some text..."
                spellCheck
                autoFocus
                onKeyDown={e => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, e as any)) {
                            e.preventDefault()
                            const mark = HOTKEYS[hotkey]
                            toggleMark(editor, mark)
                        }
                    }
                    for (const hotkey in BLOCK_HOTKEYS) {
                        if (isHotkey(hotkey, e as any)) {
                            e.preventDefault()
                            const block = BLOCK_HOTKEYS[hotkey]
                            toggleBlock(editor, block)
                        }
                    }
                    for (const hotkey in FUNCTION_HOTKEYS) {
                        if (isHotkey(hotkey, e as any)) {
                            e.preventDefault()
                            const fn = FUNCTION_HOTKEYS[hotkey]
                            fn(editor)
                        }
                    }
                }}
            />
        </Slate>
    )
}

const InitialState = [
    {
        type: "paragraph",
        children: [{text: ""}]
    },
]