import React from 'react'
import { InlineIcon } from "@iconify/react-with-api";
import { Editor as SlateEditor } from "slate";
import { useSlate } from 'slate-react';
import { Editor, toggleListBlock } from '../../editor/lists';

interface Props {
    format: string;
    icon: string;
    alt?: string;
}

export const ListButton: React.FC<Props> = ({ format, icon, alt }) => {
    const editor = useSlate();
    const isActive = checkActive(editor, format);

    return (
        <li>
            <button className={isActive ? "active" : ""}
                onMouseDown={evt => {
                evt.preventDefault();
                toggleListBlock(editor, format)
            }} title={alt}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}

const checkActive = (editor: SlateEditor, format: string) => {
    const currentList = Editor.getCurrentList(editor);
    if (currentList) {
        const [listNode] = currentList;
        return listNode.type === format;
    }
}