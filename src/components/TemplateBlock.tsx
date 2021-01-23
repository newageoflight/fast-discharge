import React, { useEffect, useState } from 'react'
import { Editor, Transforms } from 'slate';
import { RenderElementProps, useFocused, useSelected } from 'slate-react'
import CreatableSelect from 'react-select/creatable'

interface TemplateBlockProps {
    name: string;
    opts?: string[];
    defaultValue?: string;
}

export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const [chosenValue, setChosenValue] = useState<{label:string, value:string}>();
    const [options, setOptions] = useState(element.opts ? (element.opts as string[]).map(createOption) : [])

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
            <CreatableSelect placeholder={element.name as string} onChange={handleChange} onCreateOption={handleCreate} value={chosenValue} options={options} />
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