import { Editor } from "slate";
import { SlatePlugin } from "@udecode/slate-plugins";

import { renderTemplates } from './RenderTemplates';
import { TemplateBlocksOptions } from './interfaces/Options';
import { isHotkey } from 'is-hotkey';
import { findPreviousTemplate, findNextTemplate } from "./transforms/NavigateTemplates";

// read over these before you get into the refactoring:
// https://slate-plugins-next.netlify.app/?path=/story/elements-mention--example
// https://github.com/udecode/slate-plugins/tree/e29baf6a90d52692a0ddd9f49cf2668fabe0b873/packages/slate-plugins/src/elements/mention

const templateElementTypes = ["template-block"]

export const TemplateBlocksPlugin = (options?: TemplateBlocksOptions): SlatePlugin => ({
    renderElement: renderTemplates,
    inlineTypes: templateElementTypes,
    voidTypes: templateElementTypes,
    onKeyDown: (e: KeyboardEvent, editor: Editor) => {
        if (isHotkey("mod+[", e))
            findPreviousTemplate(editor)
        if (isHotkey("mod+]", e))
            findNextTemplate(editor)
    }
})
