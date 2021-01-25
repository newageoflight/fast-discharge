import { Editor, Node, NodeEntry, Location, Transforms } from 'slate';

// utility functions for finding and navigating to template blocks in the editor
// TODO: none of these currently work.
// actually they kinda work - if you have more than one block present, it will go two blocks back
// however, it will skip over the nearest block for reasons i can't understand at the moment
// also, selecting the template should not just take you to the block but also allow you to select the options

export const findNextTemplate = (editor: Editor, at?: Location): void => {
    let previousPoint = Editor.before(editor, at || editor.selection!)
    let nextTemplateNodeEntry = (Editor.next(editor, {at: previousPoint, match: (node: Node) => {console.log(node, node.type === "template-block"); return node.type === "template-block"}, voids: true}) as NodeEntry)
    console.log(nextTemplateNodeEntry)
    if (!!nextTemplateNodeEntry) {
        let [,nextTemplatePath] = nextTemplateNodeEntry
        Transforms.select(editor, nextTemplatePath);
    }
}

export const findPreviousTemplate = (editor: Editor, at?: Location): void => {
    let nextPoint = Editor.after(editor, at || editor.selection!)
    let lastTemplateNodeEntry = (Editor.previous(editor, {at: nextPoint, match: (node: Node) => {console.log(node, node.type === "template-block"); return node.type === "template-block"}, voids: true}) as NodeEntry)
    console.log(lastTemplateNodeEntry)
    if (!!lastTemplateNodeEntry) {
        let [,lastTemplatePath] = lastTemplateNodeEntry
        Transforms.select(editor, lastTemplatePath)
    }
}