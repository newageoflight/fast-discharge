import { BoldPlugin, EditablePlugins, ItalicPlugin, ParagraphPlugin, pipe, UnderlinePlugin } from '@udecode/slate-plugins';
import React, { useMemo, useState } from 'react'
import { createEditor, Node } from 'slate';
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const initialValue: Node[] = [
    {
        type: "paragraph",
        children: [
            {
                text: "Bold, italic and underlined text",
                bold: true,
                italic: true,
                underline: true,
            }
        ]
    }
]

const plugins = [ParagraphPlugin(), BoldPlugin(), ItalicPlugin(), UnderlinePlugin()]

const withPlugins = [withReact, withHistory] as const;

export const NewEditor: React.FC = () => {
    const [value, setValue] = useState(initialValue);

    const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

    return (
        <Slate editor={editor} value={value} onChange={newValue => setValue(value)}>
            <EditablePlugins plugins={plugins} placeholder="Enter some text..." />
        </Slate>
    )
}
