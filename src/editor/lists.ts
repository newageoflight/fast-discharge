import { Editor as SlateEditor } from "slate";
import { EditListPlugin } from '@productboard/slate-edit-list';

const editListOptions = {
    types: ["bulleted-list", "numbered-list"],
    typeItem: "list-item",
}

export const [withEditList, onKeyDown, { Editor, Element, Transforms }] = EditListPlugin(editListOptions);

export const indentListItem = (editor: SlateEditor): void => {
    Transforms.increaseItemDepth(editor)
}

export const dedentListItem = (editor: SlateEditor): void => {
    Transforms.decreaseItemDepth(editor)
}

export const makeListBlock = (editor: SlateEditor, type?: string): void => {
    Transforms.wrapInList(editor, type)
}

export const unmakeListBlock = (editor: SlateEditor): void => {
    Transforms.unwrapList(editor)
}

export const toggleListBlock = (editor: SlateEditor, type?: string): void => {
    const currentlyInList = Editor.isSelectionInList(editor)
    if (!currentlyInList)
        Transforms.wrapInList(editor, type);
    else
        Transforms.unwrapList(editor);
}

export const insertNewListItem = (editor: SlateEditor): void => {
    
}