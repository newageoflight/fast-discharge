import { Editor, Location } from 'slate';
import { findNextTemplate, findPreviousTemplate } from './templates';

export const HOTKEYS: Record<string, string> = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
}

export const BLOCK_HOTKEYS: Record<string, string> = {
    'mod+alt+1': 'heading-one',
    'mod+alt+2': 'heading-two',
    'mod+alt+3': 'heading-three',
    'mod+alt+4': 'heading-four',
    'mod+.': 'bulleted-list',
    'mod+/': 'numbered-list',
}

export const TEMPLATE_NAV_HOTKEYS: Record<string, (editor: Editor, at?: Location) => void> = {
    'mod+]': findNextTemplate,
    'mod+[': findPreviousTemplate,
}

export const FUNCTION_HOTKEYS: Record<string, (editor: Editor) => void> = {
    'mod+]': findNextTemplate,
    'mod+[': findPreviousTemplate,
}

export const LIST_TYPES: string[] = ['numbered-list', 'bulleted-list']