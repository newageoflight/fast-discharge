import React, { useCallback, useContext, useRef, useState } from 'react'
import { RenderElementProps } from 'slate-react'
import CreatableSelect from 'react-select/creatable'
import { ValueType } from 'react-select';

import { BaseTemplate, BaseTemplateContext } from './BaseTemplate';

// this template should be an inline editable element that also allows you to:
// - set options
// - expand to arbitrary slate json
// insert using {{

// TODO: add the ability to set the options while the template block is focused/selected
export const ListTemplate: React.FC<RenderElementProps> = ({ attributes, element, children }) => {
    const { onTop: menuOpen, setOnTop: setMenuOpen, name, changeProps } = useContext(BaseTemplateContext);
    const [chosenValue, setChosenValue] = useState<ValueType<{label:string, value:string},false>>(element.defaultValue ? (element.defaultValue as {label:string,value:string}) : null as ValueType<{label:string,value:string}, false>);
    const [options, setOptions] = useState<{label:string,value:string}[]>(element.opts ? element.opts as {label:string, value:string}[] : [])
    const selectRef = useRef<any>(null);

    const handleChange = useCallback((newValue: any, actionMeta: any) => {
        setChosenValue(newValue);
        changeProps({defaultValue: newValue})
        // eslint-disable-next-line
    }, [setChosenValue])
    
    const handleCreate = (inputValue: any) => {
        const newOption = createOption(inputValue);
        setOptions([...options, newOption])
        setChosenValue(newOption);
        changeProps({opts: [...options, newOption], defaultValue: newOption})
    }

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            <CreatableSelect
                ref={selectRef}
                styles={customSelectStyles} theme={customSelectTheme}
                placeholder={name}
                onChange={handleChange} onCreateOption={handleCreate}
                onMenuOpen={() => setMenuOpen(true)} onMenuClose={() => setMenuOpen(false)}
                value={chosenValue} options={options} />
        </BaseTemplate>
    )
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
        let [currentOption] = state.getValue();
        return ({
            ...provided,
            margin: "0 0 0 4px",
            transform: "translateY(-2px)",
            width: `${(currentOption ? currentOption.label.length : state.selectProps.placeholder ? state.selectProps.placeholder.length : 5) + 2}ex`,
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