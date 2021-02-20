// all in all, a template block can be:
// - void: contains nothing, only can be overtyped
// - date: holds a datetime. uses a datepicker to select
// - select: the default type, holds string options
// - multiselect: can join multiple string options together
// - ref: dynamic links or simple values provided through an addon
// - expr: a nunjucks expression that is dependent on other variables in the scope of the template

type OptionType = {
    label: string,
    value: string
}

export interface TemplateBlockProps {
    name?: string;
    canOvertype?: boolean;
    templateType?: "void" | "date" | "select" | "multiselect" | "ref" | "expr" | "wiz";
    opts?: OptionType[];
    defaultValue?: OptionType | OptionType[] | Date | string;
}

// template variables cannot be voids, refs, expressions or wizards
export interface TemplateVariable {
    templateType: "date" | "select" | "multiselect" | "ref" | "expr" | "wiz";
    value: Date | string | string[];
}