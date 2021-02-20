// all in all, a template block can be:
// - void: contains nothing, only can be overtyped
// - date: holds a datetime. uses a datepicker to select
// - select: the default type, holds string options
// - multiselect: can join multiple string options together
// - ref: dynamic links or simple values provided through an addon
// - expr: a nunjucks expression that is dependent on other variables in the scope of the template
export interface TemplateBlockProps {
    name?: string;
    canOvertype?: boolean;
    type?: "void" | "date" | "select" | "multiselect" | "ref" | "expr" | "wiz";
    opts?: {label:string, value:string}[];
    defaultValue?: {label:string,value:string};
}

// template variables cannot be voids, refs, expressions or wizards
export interface TemplateVariable {
    type: "date" | "select" | "multiselect";
    value: Date | string | string[];
}