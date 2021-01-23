import React, { useState } from 'react'
import { Editor, Transforms } from 'slate';
import { RenderElementProps, useFocused, useSelected } from 'slate-react'
import CreatableSelect from 'react-select/creatable'
import { InlineIcon } from '@iconify/react-with-api';

interface TemplateBlockProps {
    name?: string;
    opts?: string[];
    defaultValue?: string;
}

export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const [chosenValue, setChosenValue] = useState<{label:string, value:string}>();
    const [options, setOptions] = useState(element.opts ? (element.opts as string[]).map(createOption) : [])
    // todo: add the ability to name each template block
    // clicking a button should take you to an input element where you can set it
    const [name, setName] = useState<string>(element.name as string);
    const [editName, setEditName] = useState(false);

    const handleChange = (newValue: any, actionMeta: any) => {
        setChosenValue(newValue);
    }
    
    const handleCreate = (inputValue: any) => {
        const newOption = createOption(inputValue);
        setOptions([...options, newOption])
        setChosenValue(newOption);
    }

    return (
        <span {...attributes}
            className="template-block"
            contentEditable={false}
            style={{
                padding: '3px 3px 2px',
                margin: '0 1px',
                verticalAlign: 'baseline',
                display: 'inline-block',
                borderRadius: '4px',
                backgroundColor: '#eee',
                fontSize: '0.9em',
                boxShadow: selected && focused ? '0 0 0 2px #b4d5ff' : 'none',
                minWidth: '7rem',
            }}>
            {/* {(focused) ? 
            <CreatableSelect onChange={handleChange} options={element.opts ? (element.opts as string[]).map(createOption) : []} />
                : (chosenValue ? (<>{chosenValue}</>) : (
                    <>
                        {"{{ "}
                        {element.name as string}
                        {" }}"}
                    </>
                ))
            } */}
            {/* todo: make sure that the divs and the button display on one line */}
            {editName ?
            (
                <div className="content">
                    <label>Name this input: </label>
                    <input type="text" />
                </div>
            )
            : (<CreatableSelect placeholder={name} onChange={handleChange} onCreateOption={handleCreate} value={chosenValue} options={options} />)}
            <button className="name-setter" onClick={() => setEditName(!editName)} style={{display: "inline-block", border: "none", outline: "none"}}><InlineIcon icon="bi:gear-fill" /></button>
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