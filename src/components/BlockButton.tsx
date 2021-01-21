import React from 'react'
import { Icon, InlineIcon } from "@iconify/react-with-api";
import { useSlate } from 'slate-react';
import { toggleBlock, isBlockActive } from './../utils/EditorUtils';

interface Props {
    format: string;
    icon: string;
}

export const BlockButton: React.FC<Props> = ({ format, icon }) => {
    const editor = useSlate();
    const isActive = isBlockActive(editor, format);

    return (
        <li>
            <button className={isActive ? "active" : ""}
                onMouseDown={evt => {
                evt.preventDefault();
                toggleBlock(editor, format)
            }}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
