import React from 'react'
import { RenderElementProps } from 'slate-react';

import { BaseTemplate } from './BaseTemplate';

// generic void template similar to wildcards in EPIC or PowerChart, only purpose is to be overtyped

export const VoidTemplate: React.FC<RenderElementProps> = ({ attributes, element, children }) => {
    return (
        <BaseTemplate renderProps={{attributes, element, children}} tabIndex={0} canOverwrite={true}>
            {({ name }) => <>{name || "(void)"}</>}
        </BaseTemplate>
    )
}
