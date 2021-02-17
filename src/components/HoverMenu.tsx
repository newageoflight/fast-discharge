import React, { useEffect, useRef } from 'react'
import { Descendant, Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { Portal } from './utils/Portal';
import { FunctionButton } from './buttons/FunctionButton';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { DotAbbrevsState } from './../context/DotAbbrevs';

// based on this example:
// https://github.com/ianstormtaylor/slate/blob/master/site/examples/hovering-toolbar.tsx

// this menu should give users the ability to select a chunk of text to save as a dot abbreviation

export const HoverMenu: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const editor = useSlate();
    const setDotAbbrevs = useSetRecoilState(DotAbbrevsState);

    useEffect(() => {
        const el = ref.current;
        const { selection } = editor;

        if (!el) {
            return;
        }

        if (!selection || !ReactEditor.isFocused(editor) || Range.isCollapsed(selection) || Editor.string(editor, selection) === "") {
            el.removeAttribute('style');
            return;
        }

        const domSelection = window.getSelection();
        const domRange = domSelection?.getRangeAt(0);
        const rect = domRange?.getBoundingClientRect();

        el.style.opacity = '1';
        el.style.top = `${rect!.top + window.pageYOffset - el.offsetHeight}px`;
        el.style.left = `${rect!.left + window.pageXOffset - el.offsetWidth/2 + 15}px`;
    })

    return (
        <Portal>
            <div className="hovering-menubar" ref={ref}>
                <ul>
                    <FunctionButton fn={() => saveDotAbbrev(editor, setDotAbbrevs)} icon="bi:dot" alt="Save as a dot abbreviation" />
                </ul>
            </div>
        </Portal>
    )
}

function saveDotAbbrev(editor: Editor, abbrevSetter: SetterOrUpdater<any>) {
    const { selection } = editor;
    const existingAbbrevs = localStorage.getItem("dotAbbrevs") && JSON.parse(localStorage.getItem("dotAbbrevs")!)
    // get the fragment
    let fragment = Editor.fragment(editor, selection!)
    // first a dialogue should pop up asking the user to name the fragment
    let fragmentName = window.prompt("Name this fragment: ")
    let fragmentObject: Record<string,Descendant[]> = {}
    fragmentObject[fragmentName!] = fragment;
    let newAbbrevs;
    if (existingAbbrevs) {
        newAbbrevs = {...existingAbbrevs, ...fragmentObject}
    } else {
        newAbbrevs = {...fragmentObject}
    }
    abbrevSetter(newAbbrevs);
    localStorage.setItem("dotAbbrevs", JSON.stringify(newAbbrevs))
}