import { Editor, Node, NodeEntry, Transforms } from 'slate';

// utility functions for finding and navigating to template blocks in the editor
// TODO: none of these currently work.

export const findNextTemplate = (editor: Editor): void => {
    let nextTemplateNodeEntry = (Editor.next(editor, {match: (node: Node) => {console.log(node, node.type === "template-block"); return node.type === "template-block"}, voids: true}) as NodeEntry)
    console.log(nextTemplateNodeEntry)
    // let [,nextTemplatePath] = nextTemplateNodeEntry
    // Transforms.select(editor, nextTemplatePath);
}

export const findPreviousTemplate = (editor: Editor): void => {
    let lastTemplateNodeEntry = (Editor.previous(editor, {match: (node: Node) => {console.log(node, node.type === "template-block"); return node.type === "template-block"}, voids: true}) as NodeEntry)
    console.log(lastTemplateNodeEntry)
    // let [,lastTemplatePath] = lastTemplateNodeEntry
    // Transforms.select(editor, lastTemplatePath)
}