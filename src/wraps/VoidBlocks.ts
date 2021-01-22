import { Editor, Element as SlateElement } from "slate";

export const withVoids = (editor: Editor): Editor => {
    const { isInline, isVoid } = editor;
    const voidElementNames = ["template-block"]

    editor.isInline = (element: SlateElement) => {
        let elemType = element.type as string;
        return voidElementNames.includes(elemType) ? true : isInline(element);
    }

    editor.isVoid = (element: SlateElement) => {
        let elemType = element.type as string;
        return voidElementNames.includes(elemType) ? true : isVoid(element);
    }
    
    return editor;
}