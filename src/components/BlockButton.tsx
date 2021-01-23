import React from 'react'
import { InlineIcon } from "@iconify/react-with-api";
import { useSlate } from 'slate-react';
import { toggleBlock, isBlockActive } from '../editor/utils';

interface Props {
    format: string;
    icon: string;
    alt?: string;
}

export const BlockButton: React.FC<Props> = ({ format, icon, alt }) => {
    const editor = useSlate();
    const isActive = isBlockActive(editor, format);

    return (
        <li>
            <button className={isActive ? "active" : ""}
                onMouseDown={evt => {
                evt.preventDefault();
                toggleBlock(editor, format)
            }} title={alt}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
