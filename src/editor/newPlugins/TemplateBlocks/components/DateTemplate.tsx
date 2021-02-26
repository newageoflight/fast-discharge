import React, { useState } from 'react'
import { RenderElementProps } from 'slate-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BaseTemplate } from './BaseTemplate';
import { TemplateBlockProps } from '../interfaces/Templates';

// should be a span with a button that allows you to pick a date. insert using @@

export const DateTemplate: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    let safeDate;
    if (element.defaultValue instanceof Date) {
        safeDate = element.defaultValue
    } else if (typeof element.defaultValue === "string") {
        safeDate = new Date(element.defaultValue);
    }
    const [chosenDate, setChosenDate] = useState(safeDate || new Date());

    const modifyDate = (date: Date, changeProps: (props: TemplateBlockProps) => void) => {
        setChosenDate(date);
        changeProps({defaultValue: date})
    }

    // set the element's defaultValue to today by default

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            {({ name, changeProps, setOnTop }) => {
                return <DatePicker todayButton="Today" selected={chosenDate} onChange={(date: Date) => modifyDate(date, changeProps)}
                    isClearable placeholderText={name} dateFormat="dd/MM/yyyy"
                    onCalendarOpen={() => setOnTop(true)} onCalendarClose={() => setOnTop(false)} />
            }
            }
        </BaseTemplate>
    )
}
