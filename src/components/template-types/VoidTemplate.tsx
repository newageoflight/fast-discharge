import React from 'react'
import { Editor, Transforms } from 'slate';
import { RenderElementProps } from 'slate-react';

import { BaseTemplate } from './BaseTemplate';
import { TemplateBlockProps } from './../../interfaces/Templates';


// generic void template similar to wildcards in EPIC or PowerChart, only purpose is to be overtyped

export const VoidTemplate: React.FC<RenderElementProps> = ({ attributes, element, children }) => {
    return (
        <BaseTemplate renderProps={{attributes, element, children}} tabIndex={0} canOverwrite={true}>
            {({ name }) => <>{name}</>}
        </BaseTemplate>
    )
}

export const insertVoidTemplateBlock = (editor: Editor, {name}: TemplateBlockProps) => {
    const templateBlock = { type: "template-block", templateType: "void", name, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}