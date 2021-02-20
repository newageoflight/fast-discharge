import React, { useContext, useState } from 'react'
import { RenderElementProps } from 'slate-react'
import { BaseTemplate, BaseTemplateContext } from './BaseTemplate';
import DatePicker from "react-datepicker";

// should be a span with a button that allows you to pick a date. insert using @@

export const DateTemplate: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
    const { name } = useContext(BaseTemplateContext);
    const [chosenDate, setChosenDate] = useState(new Date());

    return (
        <BaseTemplate renderProps={{attributes, element, children}}>
            <DatePicker todayButton="Today" selected={chosenDate} onChange={(date: Date) => setChosenDate(date)}
                isClearable placeholderText={name} />
        </BaseTemplate>
    )
}
