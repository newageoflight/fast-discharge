import React, { useCallback, useState } from 'react'
import { Transforms, Editor } from 'slate';
import { useSelected, useFocused, useEditor, ReactEditor, RenderElementProps } from 'slate-react';
import { InlineIcon } from '@iconify/react-with-api';
import AutoSizeInput from "react-input-autosize";
import styled from "styled-components";

import { TemplateBlockProps } from "../interfaces/Templates"

// base type for all templates
// should have:
// - a gear icon for naming the block
// - an input area, whether that be select, date, link, blank or otherwise
// the point of this is just to be a generic type that can hold whatever arbitrary input you like
// what should the base type provide to the child it contains?
// - onTop and setOnTop
// - name
// - element
// - editor (maybe)

interface TemplatePassProps {
    onTop: boolean;
    setOnTop: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    editor: Editor;
    changeProps: (props: TemplateBlockProps) => void;
    selected: boolean;
    focused: boolean;
}

export interface TemplateBaseProps {
    renderProps: RenderElementProps;
    children: (templateProps: TemplatePassProps) => React.ReactElement;
    tabIndex?: number;
    canOverwrite?: boolean;
    onKeyDown?: React.KeyboardEventHandler;
}

export interface TemplateElementProps {
    renderProps: RenderElementProps;
    templateProps: TemplatePassProps;
}

export const BaseTemplate: React.FC<TemplateBaseProps> = ({ renderProps: {attributes, children: renderChildren, element}, children, tabIndex, canOverwrite, onKeyDown }) => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useEditor();
    
    const [name, setName] = useState<string>((element.name as string))
    const [editName, setEditName] = useState(false);
    
    const [onTop, setOnTop] = useState(false);

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
    }, [element])
    
    // const overWrite = (evt: React.KeyboardEvent) => {
    //     let path = ReactEditor.findPath(editor, element)
    //     if (evt.key.length === 1 && !editName) {
    //         let currentNode = Editor.node(editor, path)
    //         let newNode = {text: `${evt.key}`}
    //         // set the node's props as follows
    //         Transforms.setNodes(editor, newNode)
    //         console.log(evt.key)
    //         console.log(path, editor.children, Editor.node(editor, path))
    //         Transforms.removeNodes(editor, {at: path, voids: true})
    //         Transforms.insertText(editor, evt.key, {at: path, voids: true})
    //         Transforms.select(editor, path)
    //         console.log(path, editor.children, Editor.node(editor, path))
    //         console.log("Should overwrite this node with whatever you typed or pasted")
    //     }
    // }
    
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
        <TemplateSpan
            contentEditable={false}
            tabIndex={tabIndex}
            // onKeyDown={canOverwrite ? overWrite : undefined}
            style={onTop ? {...defaultStyles, ...focusedStyles} : defaultStyles}>
            {editName ?
            (
                <div className="content">
                    <AutoSizeInput placeholder="Name this field..." value={name} onInput={handleNameChange} onKeyDown={e => e.key === "Enter" && setEditName(!editName)} />
                </div>
            )
            : children({onTop, setOnTop, name, editor, changeProps, selected, focused})}
            <button className="name-setter"
                onClick={() => {
                    setEditName(!editName)
                }}
                tabIndex={-1}
            ><InlineIcon icon="bi:gear-fill" /></button>
            {renderChildren}
        </TemplateSpan>
    )
}

const TemplateSpan = styled.span`
    padding: 3px 3px 2px; 
    margin: 0 1px;
    vertical-align: baseline;
    display: inline-flex;
    flex-direction: row;
    border-radius: 4px;
    background-color: #eee;
    font-size: 0.9rem;
    
    > div:first-child {
        flex: 1 1 auto;
        flex-basis: inherit;
        
        > input[type=text] {
            width: 90%;
        }
    }
    
    > button.name-setter {
        display: inline-block;
        border: none;
        border-radius: 5px;
        outline: none;
        transition: 0.3s ease all;
        
        &:focus {
            box-shadow: 0 0 0 2px #b4d5ff; 
        }
    }
`