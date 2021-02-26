import React, { useEffect, useState } from 'react'
import { RenderElementProps } from 'slate-react'
import { BaseTemplate } from './BaseTemplate'
import nunjucks from "nunjucks";
import { TemplateBlockProps } from './../interfaces/Templates';
import { useRecoilValue } from 'recoil';
import { InlineIcon } from '@iconify/react-with-api';
import AutosizeInput from 'react-input-autosize';
import dayjs from "dayjs";

import { EditorVariablesState } from '../../../../context/EditorContent';
import { OneLine } from '../../../../components/OneLine';
import { FancyButton } from '../../../../components/FancyButton';

// executes arbitrary nunjucks code depending on the value of other named template fields
// useful for conditional fields e.g. use "he" if patient is male or "she" if patient is female

export const CodeTemplate: React.FC<RenderElementProps> = (props) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState<string>((props.element.expr as string))
    const [result, setResult] = useState<any>(props.element.defaultValue);
    const variables = useRecoilValue(EditorVariablesState);
    
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
    }, [variables])

    return (
        <BaseTemplate renderProps={props}>
            {({ name, changeProps }) => {
                return (
                    <OneLine theme={{main: {padding: 0}}}>
                        {!editing ? (
                            <>
                                <div>
                                    {result || "(formula)"}
                                </div>
                            </>
                        ) : (
                            <AutosizeInput placeholder={name} value={value} onChange={(event) => setValue(event.target.value)}
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

const helperFunctions = {
    dateDifference: (a: Date, b: Date, unit?: any) => {
        return dayjs(a).diff(dayjs(b), unit)
    }
}