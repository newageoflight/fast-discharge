// all in all, a template block can be:
// - void: contains nothing, only can be overtyped
// - date: holds a datetime. uses a datepicker to select
// - select: the default type, holds string options
// - multiselect: can join multiple string options together
// - ref: dynamic links or simple values provided through an addon
// - expr: a nunjucks expression that is dependent on other variables in the scope of the template
// - wiz: a "wizard" - essentially invokes a form that links to blocks that will be inserted in place of the template
//   depending on what values are entered in the form

import { Element, Editor, Text } from "slate";

export type OptionType = {
    label: string,
    value: string
}

export interface TemplateBlockProps {
    name?: string;
    canOvertype?: boolean;
    templateType?: "void" | "date" | "select" | "multiselect" | "ref" | "expr" | "wiz" | "number";
    opts?: OptionType[];
    defaultValue?: OptionType | OptionType[] | Date | string | number;
    activeInput?: boolean;
    expr?: string;
}

export interface TemplateBlockTextProps extends TemplateBlockProps, Text {};
export interface TemplateBlockElementProps extends TemplateBlockProps, Element {};
export interface TemplateBlockEditorProps extends TemplateBlockProps, Editor {};

export type TemplateBlockNode = TemplateBlockTextProps | TemplateBlockElementProps | TemplateBlockEditorProps;

// template variables cannot be voids, refs, expressions or wizards
export const legalVariableTypes: Array<TemplateVariable["templateType"] | string> = ["date", "select", "multiselect", "ref", "expr", "wiz", "number"]
export interface TemplateVariable {
    templateType: "date" | "select" | "multiselect" | "ref" | "expr" | "wiz" | "number";
    value: Date | number | string | string[];
}