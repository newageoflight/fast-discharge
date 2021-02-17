import React from 'react';
import { InlineIcon } from "@iconify/react-with-api";
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from '../../editor/utils';

interface Props {
    format: string;
    icon: string;
    alt?: string;
}

export const MarkButton: React.FC<Props> = ({ format, icon, alt }) => {
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);

    return (
        <li>
            <button className={isActive ? "active" : ""}
                onMouseDown={evt => {
                evt.preventDefault();
                toggleMark(editor, format)
            }} title={alt}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
