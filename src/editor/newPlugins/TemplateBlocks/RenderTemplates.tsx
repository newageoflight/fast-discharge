import { RenderElementProps } from 'slate-react';
import { VoidTemplate } from './components/VoidTemplate';
import { ListTemplate } from './components/ListTemplate';
import { DateTemplate } from './components/DateTemplate';
import { NumberTemplate } from './components/NumberTemplate';
import { CodeTemplate } from './components/CodeTemplate';

export const renderTemplates = ({attributes, element, children}: RenderElementProps) => {
    if (element.type === "template-block") {
        switch ((element.templateType as string)) {
            case "select":
                return <ListTemplate attributes={attributes} element={element}>{children}</ListTemplate>
            case "multiselect":
                return <ListTemplate attributes={attributes} element={element}>{children}</ListTemplate>
            case "void":
                return <VoidTemplate attributes={attributes} element={element}>{children}</VoidTemplate>
            case "date":
                return <DateTemplate attributes={attributes} element={element}>{children}</DateTemplate>
            case "number":
                return <NumberTemplate attributes={attributes} element={element}>{children}</NumberTemplate>
            case "expr":
                return <CodeTemplate attributes={attributes} element={element}>{children}</CodeTemplate>
            default:
                return <VoidTemplate attributes={attributes} element={element}>{children}</VoidTemplate>
        }
    }
}