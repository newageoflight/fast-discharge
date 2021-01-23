import React, { useEffect, useState } from 'react'
import { Editor, Element as SlateElement, Transforms } from 'slate';
import { RenderElementProps, ReactEditor, useFocused, useSelected, useSlate } from 'slate-react'
import CreatableSelect from 'react-select/creatable'
import { InlineIcon } from '@iconify/react-with-api';

interface TemplateBlockProps {
    name?: string;
    opts?: {label:string, value:string}[];
    defaultValue?: {label:string,value:string};
}

// TODO: save the state of template blocks to the editor, otherwise Slate will just forget
export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useSlate();

    const [chosenValue, setChosenValue] = useState<{label:string, value:string}>();
    element.defaultValue && setChosenValue(element.defaultValue as {label:string,value:string});
    const [options, setOptions] = useState<{label:string,value:string}[]>(element.opts ? element.opts as {label:string, value:string}[] : [])
    const [name, setName] = useState<string>(element.name as string);
    const [editName, setEditName] = useState(false);
    const [triggerChange, setTriggerChange] = useState(false);

    const handleChange = (newValue: any, actionMeta: any) => {
        setChosenValue(newValue);
        setTriggerChange(true);
    }
    
    const handleCreate = (inputValue: any) => {
        const newOption = createOption(inputValue);
        setOptions([...options, newOption])
        setChosenValue(newOption);
        setTriggerChange(true);
    }
    
    useEffect(() => {
        if (triggerChange) {
            console.log(editor.children)
            let path = ReactEditor.findPath(editor, element)
            console.log(path)
            let newProps: Partial<SlateElement> = {
                name,
                opts: options,
                defaultValue: chosenValue
            }
            console.log(newProps)
            Transforms.setNodes(editor, newProps, {at: path})
        }
        setTriggerChange(false);
    }, [triggerChange])

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
                    <input type="text" placeholder="Name this field..." value={name} onInput={e => setName((e.target as HTMLInputElement).value)} />
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

// Properties of a template block:
// - Name
// - Options
// - Default value
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
    container: (provided: any, state: any) => {
        return {...provided}
    }
}