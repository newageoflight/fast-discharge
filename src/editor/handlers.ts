import { Editor } from 'slate';
import { isHotkey } from 'is-hotkey';

import { HOTKEYS, BLOCK_HOTKEYS, FUNCTION_HOTKEYS, LIST_TYPES } from './consts';
import { toggleMark, toggleBlock } from './utils'

export const hotkeyHandler = (event: any, editor: Editor) => {
    for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const mark = HOTKEYS[hotkey]
            toggleMark(editor, mark)
        }
    }
    for (const hotkey in BLOCK_HOTKEYS) {
        if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const block = BLOCK_HOTKEYS[hotkey]
            // todo: modify this function.
            // if something is toggled to a list but it's just before or after another one,
            // it should be merged with it as a bullet point
            if (LIST_TYPES.includes(block)) {
                switch (block) {
                    case "bulleted-list":
                        break;
                    case "numbered-list":
                        break;
                }
            }
            else
                toggleBlock(editor, block)
        }
    }
    for (const hotkey in FUNCTION_HOTKEYS) {
        if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const fn = FUNCTION_HOTKEYS[hotkey]
            fn(editor)
        }
    }
}
