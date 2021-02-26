import { deserializeHeading, HeadingPluginOptions, HeadingPluginOptionsValues, renderElementHeading, SlatePlugin, toggleNodeType } from "@udecode/slate-plugins";
import isHotkey from "is-hotkey";

export const HeadingPlugin = (options?: HeadingPluginOptions): SlatePlugin => ({
    renderElement: renderElementHeading(options),
    deserialize: deserializeHeading(options),
    onKeyDown: (e, editor) => {
        options && Object.entries(options).forEach(([k, v]) => {
            let { type, defaultType, hotkey } = (v as HeadingPluginOptionsValues);
            const hotkeys = (Array.isArray(hotkey)) ? hotkey : !!hotkey ? [hotkey] : undefined
            if (hotkeys) {
                for (let key of hotkeys) {
                    if (isHotkey(key, e)) {
                        e.preventDefault();
                        toggleNodeType(editor, { activeType: type!, inactiveType: defaultType })
                    }
                }
            }
        })
    }
})
