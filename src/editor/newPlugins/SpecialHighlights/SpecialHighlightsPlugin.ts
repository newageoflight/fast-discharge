import { SlatePlugin } from "@udecode/slate-plugins-core";

// "special highlights" are meant to be highlights that have special powers
// namely, they are intended to support the following kinds of jinja2/nunjucks tag blocks:
// - if/elif/else
// - for
// and also something not in jinja2/nunjucks, which is a switch/case statement
// otherwise, they are editables that are meant to behave just like the rest of the slate editor
// they'll be represented in the toolbar by a percent icon

interface SpecialHighlightsOptions {

}

export const SpecialHighlightsPlugin = (options?: SpecialHighlightsOptions): SlatePlugin => ({

})