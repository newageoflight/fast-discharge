import React from 'react'
import { Editor } from 'slate';
import { RenderElementProps, useFocused, useSelected } from 'slate-react'

interface TemplateBlockProps {
    name: string;
    opts?: string[];
    defaultValue?: string;
}

export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();

    return (
        <span {...attributes}
            contentEditable={false}
            style={{
                padding: '3px 3px 2px',
                margin: '0 1px',
                verticalAlign: 'baseline',
                display: 'inline-block',
                borderRadius: '4px',
                backgroundColor: '#eee',
                fontSize: '0.9em',
                boxShadow: selected && focused ? '0 0 0 2px #b4d5ff' : 'none',
            }}>
            TEMPLATE BLOCK
            {children}
        </span>
    )
}

// Properties of a template block:
// - Name
// - Options
// - Default value
export const insertTemplateBlock = (editor: Editor, {name, opts, defaultValue}: TemplateBlockProps) => {

}