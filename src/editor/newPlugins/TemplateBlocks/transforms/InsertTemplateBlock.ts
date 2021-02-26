import { Editor, Transforms } from "slate";
import { TemplateBlockProps } from './../interfaces/Templates';

// insert a new template block and add it to the variable scope
export const insertTemplateBlock = (editor: Editor, props: TemplateBlockProps) => {
    const templateBlock = { type: "template-block", ...props, children: [{text: ''}] }
    Transforms.insertNodes(editor, templateBlock);
    Transforms.move(editor);
}