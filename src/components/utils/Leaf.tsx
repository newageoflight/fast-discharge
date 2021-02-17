import React from 'react'
import { RenderLeafProps } from 'slate-react'

export const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
    if (leaf.bold)
        children = <strong>{children}</strong>
        
    if (leaf.code)
        children = <code>{children}</code>

    if (leaf.italic)
        children = <em>{children}</em>

    if (leaf.underline)
        children = <u>{children}</u>
        
    if (leaf.pretemplate)
        children = <span style={{borderRadius: "5px", backgroundColor: "#ddd"}}>{children}</span>
        
    return <span {...attributes}>{children}</span>
}
