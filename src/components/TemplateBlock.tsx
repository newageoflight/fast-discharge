import React, { useCallback, useState } from 'react'
import { Editor, Transforms } from 'slate';
import { RenderElementProps, ReactEditor, useFocused, useSelected, useEditor } from 'slate-react'
import CreatableSelect from 'react-select/creatable'
import { InlineIcon } from '@iconify/react-with-api';
import { ValueType } from 'react-select';
import AutoSizeInput from "react-input-autosize";

interface TemplateBlockProps {
    name?: string;
    opts?: {label:string, value:string}[];
    defaultValue?: {label:string,value:string};
}

// TODO: save the state of template blocks to the editor, otherwise Slate will just forget
export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useEditor();

    // this next line looks ugly af but i'm not sure how else to do it
    const [chosenValue, setChosenValue] = useState<ValueType<{label:string, value:string},false>>(element.defaultValue ? (element.defaultValue as {label:string,value:string}) : null as ValueType<{label:string,value:string}, false>);
    const [options, setOptions] = useState<{label:string,value:string}[]>(element.opts ? element.opts as {label:string, value:string}[] : [])
    const [name, setName] = useState<string>(element.name as string);
    const [editName, setEditName] = useState(false);

    const handleChange = useCallback((newValue: any, actionMeta: any) => {
        setChosenValue(newValue);
        changeProps({defaultValue: newValue})
    }, [setChosenValue])
    
    const handleCreate = useCallback((inputValue: any) => {
        const newOption = createOption(inputValue);
        setOptions([...options, newOption])
        setChosenValue(newOption);
        changeProps({opts: [...options, newOption], defaultValue: newOption})
    }, [setOptions, setChosenValue])
    
    const handleNameChange = useCallback((evt: React.FormEvent) => {
        let newName = (evt.target as HTMLInputElement).value
        setName(newName);
        changeProps({name: newName})
    }, [setName])
    
    const changeProps = useCallback(({name, opts, defaultValue}: TemplateBlockProps) => {
        console.log("changeProps called")
        let path = ReactEditor.findPath(editor, element)
        let newProps = {name, opts, defaultValue}
        console.log(path, newProps, editor.children)
        Transforms.setNodes(editor, newProps, {at:path})
    }, [])
    
    return (
        <span {...attributes}
            className="template-block"
            contentEditable={false}
            style={{
                boxShadow: selected && focused ? '0 0 0 2px #b4d5ff' : 'none',
            }}>
            {editName ?
            (
                <div className="content">
                    <AutoSizeInput placeholder="Name this field..." value={name} onInput={handleNameChange} onKeyDown={e => e.key === "Enter" && setEditName(!editName)} />
                </div>
            )
            : (<CreatableSelect styles={customSelectStyles} placeholder={name} onChange={handleChange} onCreateOption={handleCreate} value={chosenValue} options={options} />)}
            <button className="name-setter" onClick={() => {
                setEditName(!editName)
            }}><InlineIcon icon="bi:gear-fill" /></button>
            {children}
        </span>
    )
}

export const insertTemplateBlock = (editor: Editor, {name, opts, defaultValue}: TemplateBlockProps) => {
    const templateBlock = { type: "template-block", name, opts, defaultValue, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, '_')
})

const customSelectStyles = {
    valueContainer: (provided: any, state: any) => {
        return {...provided, minWidth: "7em"}
    }
}