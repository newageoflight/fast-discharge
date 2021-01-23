import React from 'react';
import { InlineIcon } from "@iconify/react-with-api";
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from './../utils/EditorUtils';

interface Props {
    format: string;
    icon: string;
}

export const MarkButton: React.FC<Props> = ({ format, icon }) => {
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);

    return (
        <li>
            <button className={isActive ? "active" : ""}
                onMouseDown={evt => {
                evt.preventDefault();
                toggleMark(editor, format)
            }}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
