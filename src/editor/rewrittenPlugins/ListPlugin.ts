import { deserializeList, ListPluginOptions, onKeyDownList, renderElementList, SlatePlugin, toggleList } from "@udecode/slate-plugins";
import isHotkey from "is-hotkey";
import { Editor } from "slate";

export const ListPlugin = (options?: ListPluginOptions): SlatePlugin => ({
    renderElement: renderElementList(options),
    deserialize: deserializeList(options),
    onKeyDown: (e: KeyboardEvent, editor: Editor) => {
        if (options && Object.keys(options).includes("ol")) {
            if (options.ol!.hotkey && isHotkey(options.ol!.hotkey, e)) {
                toggleList(editor, { typeList: "ol" })
            }
        }
        if (options && Object.keys(options).includes("ul")) {
            if (options.ul!.hotkey && isHotkey(options.ul!.hotkey!, e)) {
                toggleList(editor, { typeList: "ul" })
            }
        }
        
        // trying to rewrite the logic so it will work for multiple list items
        onKeyDownList(options)(e, editor);
    }
})