import React, { useState } from 'react'
import { RenderElementProps } from 'slate-react'
import { BaseTemplate } from './BaseTemplate';
import { TemplateBlockProps } from './../interfaces/Templates';

export const NumberTemplate: React.FC<RenderElementProps> = ({attributes, element, children}) => {
    const [value, setValue] = useState<number>((element.defaultValue as number));

    const modifyValue = (value: number, changeProps: (props: TemplateBlockProps) => void) => {
        setValue(value);
        changeProps({defaultValue: value})
    }
    
    const asString = (value: number | undefined): string => {
        if (value == null)
            return ''
        else
            return value.toString()
    }

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            {({name, changeProps}) => <input type="number" value={value} onChange={event => modifyValue(event.target.valueAsNumber, changeProps)}
                placeholder={name || "(number)"}
                style={{
                width: `${(value ? asString(value).length : name ? name.length : 8) + 3}ex`
            }}/>}
        </BaseTemplate>
    )
}
