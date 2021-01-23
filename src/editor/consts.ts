import { Editor } from 'slate';
import { indentListItem, dedentListItem, nextTemplateBlock } from './utils';

export const HOTKEYS: Record<string, string> = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
}

// TODO: add a shortcut for indenting and dedenting list items
export const BLOCK_HOTKEYS: Record<string, string> = {
    'mod+alt+1': 'heading-one',
    'mod+alt+2': 'heading-two',
    'mod+alt+3': 'heading-three',
    'mod+alt+4': 'heading-four',
    'mod+.': 'bulleted-list',
    'mod+/': 'numbered-list',
}

export const FUNCTION_HOTKEYS: Record<string, (editor: Editor) => void> = {
    'mod+]': indentListItem,
    'mod+[': dedentListItem,
    'tab': nextTemplateBlock,
}

export const LIST_TYPES: string[] = ['numbered-list', 'bulleted-list']