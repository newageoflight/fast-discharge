import React, { useCallback, useRef, useState } from 'react'
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

// TODO: add the ability to set the options while the template block is focused/selected
export const TemplateBlock: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useEditor();

    // this next line looks ugly af but i'm not sure how else to do it
    const [chosenValue, setChosenValue] = useState<ValueType<{label:string, value:string},false>>(element.defaultValue ? (element.defaultValue as {label:string,value:string}) : null as ValueType<{label:string,value:string}, false>);
    const [options, setOptions] = useState<{label:string,value:string}[]>(element.opts ? element.opts as {label:string, value:string}[] : [])
    const [name, setName] = useState<string>(element.name as string);
    const [editName, setEditName] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    // probably shouldn't be using "any" as the type here but idk what else to do lol
    const selectRef = useRef<any>(null);
    // const elementRef = useRef<HTMLSpanElement>(null);
    const editorSelection = useRef<any>(editor.selection);
    // const [selectActive, setSelectActive] = useState(false);

    const handleChange = useCallback((newValue: any, actionMeta: any) => {
        setChosenValue(newValue);
        changeProps({defaultValue: newValue})
    }, [setChosenValue])
    
    const handleCreate = (inputValue: any) => {
        const newOption = createOption(inputValue);
        setOptions([...options, newOption])
        setChosenValue(newOption);
        changeProps({opts: [...options, newOption], defaultValue: newOption})
    }
    
    const handleNameChange = useCallback((evt: React.FormEvent) => {
        let newName = (evt.target as HTMLInputElement).value
        setName(newName);
        changeProps({name: newName})
    }, [setName])
    
    const changeProps = useCallback(({name, opts, defaultValue}: TemplateBlockProps) => {
        // console.log("changeProps called")
        let path = ReactEditor.findPath(editor, element)
        let newProps = {name, opts, defaultValue}
        // console.log(path, newProps, editor.children)
        Transforms.setNodes(editor, newProps, {at:path})
    }, [])
    
    // useEffect(() => {
    //     console.log(selectRef.current)
    //     console.log(elementRef.current)
    // }, [selectRef, elementRef])
    
    // somewhat unsafe but it works
    // useEffect(() => {
    //     if (focused && selected && !!selectRef) {
    //         editorSelection.current = editor.selection
    //         selectRef!.current!.focus()
    //         // setSelectActive(true);
    //     }
    // }, [focused, selected])
    
    // TODO: fix navigation
    // const onKeyDown = (event: any) => {
    //     for (const hotkey in TEMPLATE_NAV_HOTKEYS) {
    //         if (isHotkey(hotkey, event)) {
    //             event.preventDefault();
    //             const fn = TEMPLATE_NAV_HOTKEYS[hotkey];
    //             console.log(editorSelection.current)
    //             fn(editor, editorSelection.current)
    //         }
    //     }
    // }
    

    // const onKeyDown = (event: any) => {
    //     console.log("keyDown event captured")
    //     switch (event.key) {
    //         case "Enter":
    //             event.preventDefault();
    //             if (focused && selected && !!selectRef && !selectActive) {
    //                 editorSelection.current = editor.selection;
    //                 selectRef.current.focus();
    //                 console.log("Should focus selection box")
    //                 setSelectActive(true);
    //             } else if (selectActive) {
    //                 console.log("Should refocus to editor")
    //                 // refocus to parent
    //             }
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
            : (<CreatableSelect
                    ref={selectRef}
                    styles={customSelectStyles} theme={customSelectTheme}
                    placeholder={name}
                    onChange={handleChange} onCreateOption={handleCreate}
                    onMenuOpen={() => setMenuOpen(true)} onMenuClose={() => setMenuOpen(false)}
                    value={chosenValue} options={options} />)}
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

export const insertTemplateBlock = (editor: Editor, {name, opts, defaultValue}: TemplateBlockProps) => {
    const templateBlock = { type: "template-block", name, opts, defaultValue, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, '_')
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
        // console.log(state);
        let [currentOption] = state.getValue();
        // console.log(currentOption)
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