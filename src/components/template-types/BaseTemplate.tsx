import React, { useCallback, useState } from 'react'
import { Transforms } from 'slate';
import { useSelected, useFocused, useEditor, ReactEditor, RenderElementProps } from 'slate-react';
import { InlineIcon } from '@iconify/react-with-api';
import AutoSizeInput from "react-input-autosize";

// base type for all templates
// should have:
// - a gear icon for naming the block
// - an input area, whether that be select, date, link, blank or otherwise
// the point of this is just to be a generic type that can hold whatever arbitrary input you like

export interface TemplateBlockProps {
    name?: string;
    type?: "void" | "date" | "list" | "ref";
    opts?: {label:string, value:string}[];
    defaultValue?: {label:string,value:string};
}

export const BaseTemplate: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useEditor();
    
    const [name, setName] = useState<string>((element.name as string))
    const [editName, setEditName] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNameChange = useCallback((evt: React.FormEvent) => {
        let newName = (evt.target as HTMLInputElement).value
        setName(newName);
        changeProps({name: newName})
        // eslint-disable-next-line
    }, [setName])
    
    const changeProps = useCallback((props: TemplateBlockProps) => {
        let path = ReactEditor.findPath(editor, element)
        let newProps = {...props}
        Transforms.setNodes(editor, newProps, {at:path})
        // eslint-disable-next-line
    }, [])
    
    // this fix using the onmenuclose and onmenuopen hooks seems to work, but i'm not sure how safe it is
    const defaultStyles: React.CSSProperties = {
        boxShadow: selected && focused ? '0 0 0 2px #b4d5ff' : 'none',
        transform: `translateY(${editName ? 0 : 2}px)`,
        transition: "0.3s ease all"
    }

    const focusedStyles: React.CSSProperties = {
        position: "relative",
        zIndex: 99
    }

    return (
        <span {...attributes}
            className="template-block"
            contentEditable={false}
            style={menuOpen ? {...defaultStyles, ...focusedStyles} : defaultStyles}>
            {editName ?
            (
                <div className="content">
                    <AutoSizeInput placeholder="Name this field..." value={name} onInput={handleNameChange} onKeyDown={e => e.key === "Enter" && setEditName(!editName)} />
                </div>
            )
            : (<>{name}</>)}
            <button className="name-setter"
                onClick={() => {
                    setEditName(!editName)
                }}
                tabIndex={-1}
            ><InlineIcon icon="bi:gear-fill" /></button>
            {children}
        </span>
    )
}
