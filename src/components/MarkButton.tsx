import React from 'react';
import { Icon, InlineIcon } from "@iconify/react-with-api";
import { useSlate } from 'slate-react';
import { toggleMark } from './../utils/EditorUtils';

interface Props {
    format: string;
    icon: string;
}

export const MarkButton: React.FC<Props> = ({ format, icon }) => {
    const editor = useSlate();

    return (
        <li>
            <button
                onMouseDown={evt => {
                evt.preventDefault();
                toggleMark(editor, format)
            }}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
