import React, { useCallback, useRef, useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { ValueType } from 'react-select';
import { Editor, Transforms } from 'slate';
import { RenderElementProps } from 'slate-react';

import { BaseTemplate } from './BaseTemplate';
import { TemplateBlockProps } from '../../interfaces/Templates';

// this template should be an inline editable element that also allows you to:
// - set options
// - expand to arbitrary slate json
// insert using {{
type OptionType = {
    label: string,
    value: string
}

// TODO: add the ability to set the options while the template block is focused/selected
export const ListTemplate: React.FC<RenderElementProps> = ({ attributes, element, children }) => {
    const isMulti = element.templateType === "multiselect"
    const [chosenValue, setChosenValue] = useState<ValueType<OptionType,false>|ValueType<OptionType,false>[]>(element.defaultValue ? (element.defaultValue as {label:string,value:string}) : null as ValueType<{label:string,value:string}, false>);
    const [options, setOptions] = useState<OptionType[]>(element.opts ? element.opts as OptionType[] : [])
    const selectRef = useRef<any>(null);

    const handleChange = useCallback((newValue: any, actionMeta: any, changeProps: (props: TemplateBlockProps) => void) => {
        setChosenValue(newValue);
        changeProps({defaultValue: newValue})
        // eslint-disable-next-line
    }, [setChosenValue])
    
    const handleCreate = (inputValue: any, changeProps: (props: TemplateBlockProps) => void) => {
        const newOption = createOption(inputValue);
        const newSetOption = isMulti ? [...((element.defaultValue ? element.defaultValue : []) as OptionType[]), newOption] : newOption
        setOptions([...options, newOption])
        setChosenValue(newSetOption);
        changeProps({opts: [...options, newOption], defaultValue: newSetOption})
    }

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            {
            ({ name, setOnTop: setMenuOpen, changeProps }) =>
            (<CreatableSelect isMulti={isMulti}
                ref={selectRef}
                styles={customSelectStyles} theme={customSelectTheme}
                placeholder={name}
                onChange={(newValue: any, actionMeta: any) => handleChange(newValue, actionMeta, changeProps)}
                onCreateOption={(inputValue: any) => handleCreate(inputValue, changeProps)}
                onMenuOpen={() => setMenuOpen(true)} onMenuClose={() => setMenuOpen(false)}
                value={chosenValue} options={options} />)
            }
        </BaseTemplate>
    )
}

export const insertListTemplateBlock = (editor: Editor, {name, opts, defaultValue}: TemplateBlockProps, isMulti?: boolean) => {
    const templateBlock = { type: "template-block", templateType: `${isMulti ? "multiselect" : "select"}`, name, opts, defaultValue, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}

const createOption = (label: string) => ({
    label,
    value: label
})

// auto width: https://stackoverflow.com/questions/46571811/react-select-auto-size-width
// modify height: https://stackoverflow.com/questions/54218351/changing-height-of-react-select-component
const customSelectStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        minHeight: "1.4em",
        height: "1.4em",
        paddingTop: "1px",
    }),
    valueContainer: (provided: any, state: any) => {
        // this doesn't work for multis so should be something else if multi
        let { isMulti } = state;
        let currentOptions = (state.getValue() as OptionType[]);
        let optionsLength = currentOptions.map(opt => opt.label.length).reduce((a,b) => a+b+(isMulti ? 3 : 2), 0) - 2
        return ({
            ...provided,
            margin: "0 0 0 4px",
            transform: "translateY(-2px)",
            width: `${(currentOptions.length > 0 ? optionsLength :
                state.selectProps.placeholder ? state.selectProps.placeholder.length : 5) + 2}ex`,
            minWidth: "5ex",
        })
    },
    input: (provided: any, state: any) => ({
        ...provided,
        margin: "0px",
    }),
    indicatorSeparator: (state: any) => ({
        display: 'none',
    }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        height: '1.4em',
        transform: "translateY(-2px)"
    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        marginTop: 0,
        zIndex: `${state.selectProps.menuIsOpen ? 999 : "inherit"}`
    }),
    multiValue: (provided: any, state: any) => ({
        ...provided,
        marginRight: "3px",
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        padding: 0,
    }),
    option: (provided: any) => ({
        ...provided,
        padding: "5px",
    }),
    noOptionsMessage: (provided: any) => ({
        ...provided,
        padding: "5px 0",
    }),
}

const customSelectTheme = (theme: any) => ({
    ...theme,
    borderRadius: 0,
    spacing: {
        ...theme.spacing,
        baseUnit: 0,
    },
})