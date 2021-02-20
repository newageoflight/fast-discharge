import React, { useState } from 'react'
import { Editor, Transforms } from "slate";
import { RenderElementProps } from 'slate-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BaseTemplate } from './BaseTemplate';
import { TemplateBlockProps } from './../../interfaces/Templates';

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

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            {({ name, changeProps }) => 
                <DatePicker todayButton="Today" selected={chosenDate} onChange={(date: Date) => modifyDate(date, changeProps)}
                    isClearable placeholderText={name} dateFormat="dd/MM/yyyy" />
            }
        </BaseTemplate>
    )
}

export const insertDateTemplateBlock = (editor: Editor, {name}: TemplateBlockProps) => {
    const templateBlock = { type: "template-block", templateType: "date", name, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}