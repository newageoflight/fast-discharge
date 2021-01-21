import React from 'react'

// This whole thing is currently based on the MD editor example from Slate.js
// The key feature to add is just the ability to tab through stuff

interface Props {
    attributes: any;
    children: any;
    leaf: any;
}

export const Leaf: React.FC<Props> = ({attributes, children, leaf}) => {
    return (
        <span {...attributes}>
            {children}
        </span>
    )
}
