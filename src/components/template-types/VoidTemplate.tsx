import React from 'react'
import { RenderElementProps } from 'slate-react';
import { BaseTemplate, useTemplate } from './BaseTemplate';


// generic void template similar to wildcards in EPIC or PowerChart, only purpose is to be overtyped

export const VoidTemplate: React.FC<RenderElementProps> = ({ attributes, element, children }) => {
    const { name } = useTemplate(element);

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            {name}
        </BaseTemplate>
    )
}