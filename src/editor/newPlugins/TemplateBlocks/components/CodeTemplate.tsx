import React, { useCallback, useEffect, useState } from 'react'
import { Transforms } from 'slate';
import { ReactEditor, RenderElementProps, useEditor } from 'slate-react'
import { BaseTemplate } from './BaseTemplate'
import nunjucks from "nunjucks";
import { TemplateBlockProps } from './../interfaces/Templates';
import { useRecoilValue } from 'recoil';
import { InlineIcon } from '@iconify/react-with-api';
import AutosizeInput from 'react-input-autosize';

import { EditorVariablesState } from '../../../../context/EditorContent';
import { OneLine } from '../../../../components/OneLine';
import { FancyButton } from '../../../../components/FancyButton';
import { helperFunctions } from '../helpers/CodeTemplateFunctions';

// executes arbitrary nunjucks code depending on the value of other named template fields
// useful for conditional fields e.g. use "he" if patient is male or "she" if patient is female
// you could also use safe-eval for this?

export const CodeTemplate: React.FC<RenderElementProps> = (props) => {
    const editor = useEditor()
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState<string>((props.element.expr as string))
    const [result, setResult] = useState<any>(props.element.defaultValue);
    const variables = useRecoilValue(EditorVariablesState);
    
    const changeProps = useCallback((elemProps: TemplateBlockProps) => {
        let path = ReactEditor.findPath(editor, props.element)
        let newProps = {...elemProps}
        Transforms.setNodes(editor, newProps, {at:path})
        // eslint-disable-next-line
    }, [props.element])

    const modifyValue = (toChange: string, changeProps: (props: TemplateBlockProps) => void) => {
        // console.log(toChange, variables)
        setValue(toChange);
        const usableVariables = Object.fromEntries(Object.entries(variables).map(([k, v]) => [k, v.value]))
        // console.log(usableVariables)
        let newResult;
        try {
            newResult = nunjucks.renderString(`{{ ${value} }}`, {...usableVariables, ...helperFunctions})
        } catch (error) {
            newResult = "~ERROR~";
        }
        setResult(newResult)
        changeProps({defaultValue: newResult, expr: toChange})
    }

    useEffect(() => {
        const usableVariables = Object.fromEntries(Object.entries(variables).map(([k, v]) => [k, v.value]))
        let newResult;
        try {
            newResult = nunjucks.renderString(`{{ ${value} }}`, {...usableVariables, ...helperFunctions})
        } catch (error) {
            newResult = "~ERROR~";
        }
        setResult(newResult)
        changeProps({defaultValue: newResult})
    }, [variables])

    return (
        <BaseTemplate renderProps={props}>
            {({ name, changeProps }) => {
                return (
                    <OneLine theme={{main: {padding: 0}}}>
                        {!editing ? (
                            <>
                                <div>
                                    {(valueNotEmpty(value) ? (result || "~NULL~") : "(formula)")}
                                </div>
                            </>
                        ) : (
                            <AutosizeInput placeholder={name || "Enter formula..."} value={value} onChange={(event) => setValue(event.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                       setEditing(false)
                                       modifyValue(e.currentTarget.value, changeProps)
                                    }}} />
                        )}
                        <FancyButton onClick={(e) => setEditing(!editing)} theme={{main: {padding: 0}}}>
                            <InlineIcon icon="bx:bxs-pencil" />
                        </FancyButton>
                    </OneLine>
                )
            }}
        </BaseTemplate>
    )
}

const valueNotEmpty = (value: string | undefined): boolean => {
    if (value != null) {
        return value.length > 0 || !!value
    }
    return false;
}