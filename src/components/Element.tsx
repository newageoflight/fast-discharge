import React from 'react'
import { RenderElementProps } from "slate-react";
import { TemplateBlock } from './TemplateBlock';

export const Element: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
            return <h3 {...attributes}>{children}</h3>
        case 'heading-four':
            return <h4 {...attributes}>{children}</h4>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'template-block':
            return <TemplateBlock attributes={attributes} children={children} element={element} />
        default:
            return <p {...attributes}>{children}</p>
    }
}
