import React from 'react'
import { useForm } from "react-hook-form";
import { DotAbbreviationMetaProps, DotAbbreviationRecord, DotAbbreviationValueProps } from './../interfaces/DotAbbrevMeta';
import { Editor } from 'slate';
import { useEditor } from 'slate-react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { InlineIcon } from '@iconify/react-with-api';
import { FancyButton } from '../../../../components/FancyButton';
import { OneLine } from './../../../../components/OneLine';

interface Props {
    setComplete: (value: boolean) => void;
    setFragments: (value: any) => void;
    lastSelection: any;
}

// popup with a form to create a new snippet
export const FragmentInserterPopup: React.FC<Props> = ({ setComplete, setFragments, lastSelection }) => {
    const editor = useEditor();
    
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data: DotAbbreviationMetaProps) => {
        const { name, description } = data;
        const existingAbbrevs = localStorage.getItem("dotAbbrevs") && JSON.parse(localStorage.getItem("dotAbbrevs")!)
        // get the fragment
        let fragment = Editor.fragment(editor, lastSelection)
        // first a dialogue should pop up asking the user to name the fragment
        let fragmentObject: DotAbbreviationRecord = {}
        fragmentObject[name] = {description, value: fragment} as DotAbbreviationValueProps;
        let newAbbrevs;
        if (existingAbbrevs) {
            newAbbrevs = {...existingAbbrevs, ...fragmentObject}
        } else {
            newAbbrevs = {...fragmentObject}
        }
        setFragments(newAbbrevs);
        localStorage.setItem("dotAbbrevs", JSON.stringify(newAbbrevs))
        setComplete(true);
    }

    return (
        <Portal>
            <DarkWrapper>
                <PopupMenu>
                    <OneLine style={{marginBottom: "10px"}}>
                        <h2 style={{margin: 0}}>
                            Save new snippet
                        </h2>
                        <FancyButton onClick={() => {
                            setComplete(true);
                        }}><InlineIcon icon="eva:close-fill" /></FancyButton>
                    </OneLine>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormRow>
                            {errors.name && <ErrorSpan>Invalid name!</ErrorSpan>}
                        </FormRow>
                        <FormRow>
                            <label htmlFor="name">Name*: </label>
                            <PrettyTextInput type="text" name="name" ref={register({required: true, pattern: /^\w+/i})} />
                        </FormRow>
                        <FormRow>
                            <label htmlFor="description">Description: </label>
                            <PrettyTextArea name="description" ref={register}></PrettyTextArea>
                        </FormRow>
                        <button type="submit">Submit</button>
                    </form>
                </PopupMenu>
            </DarkWrapper>
        </Portal>
    )
}

const PopupMenu = styled.div`
    position: absolute;
    top: 33%;
    left: 33%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 5px;
`

const DarkWrapper = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const FormRow = styled.div`
    display: flex;
    margin-bottom: 5px;

    > *:nth-child(2) {
        flex-grow: 1;
    }
`

const PrettyTextInput = styled.input`
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: 1px solid lightgrey;
    margin-left: 5px;
    transition: 0.3s ease all;

    &:focus {
        box-shadow: 0 0 0 2px #b4d5ff;
    }
`

const PrettyTextArea = styled.textarea`
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: 1px solid lightgrey;
    margin-left: 5px;
    transition: 0.3s ease all;

    &:focus {
        box-shadow: 0 0 0 2px #b4d5ff;
    }
`

const ErrorSpan = styled.span`
    background-color: #f56991;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: small;
`