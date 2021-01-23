import React from 'react'
import { InlineIcon } from '@iconify/react-with-api';
import { Editor } from 'slate'
import { useSlate } from 'slate-react';

interface Props {
    fn: (editor: Editor) => void;
    icon: string;
    alt?: string;
}

export const FunctionButton: React.FC<Props> = ({fn, icon, alt}) => {
    const editor = useSlate();
    
    return (
        <li>
            <button onMouseDown={evt => {
                evt.preventDefault();
                fn(editor)
            }} title={alt}>
                <InlineIcon icon={icon} />
            </button>
        </li>
    )
}
