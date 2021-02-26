import { Editor, Node, NodeEntry, Location, Transforms, Path, Span, Text } from 'slate';

// utility functions for finding and navigating to template blocks in the editor
// actually they kinda work - if you have more than one block present, it will go two blocks back
// however, it will skip over the nearest block for reasons i can't understand at the moment
// also, selecting the template should not just take you to the block but also allow you to select the options
// TODO: fix the selection issues

export const findNextTemplate = (editor: Editor, at?: Location): void => {
    let referencePoint = at || editor.selection!
    let [,startPoint] = Editor.node(editor, referencePoint)
    // console.log(startPoint)
    let [,endPoint] = Editor.last(editor, [])
    let searchSpan: Span = [startPoint, endPoint]
    let nodeIterator = Editor.nodes(editor, { at: searchSpan, match: (node: Node) => node.type === "template-block", mode: "lowest", voids: true })
    // for (let pair of nodeIterator) {
    //     let [node, path] = pair;
    //     console.log(node, path)
    // }
    let nextTemplateNodeEntry;
    if (!isTemplateBlock(editor, startPoint))
        [nextTemplateNodeEntry] = nodeIterator;
    else {
        nextTemplateNodeEntry = (Editor.next(editor, {
            at: referencePoint,
            match: (node: Node) => node.type === "template-block",
            mode: 'lowest',
            voids: true
        }) as NodeEntry)
    }
    if (!!nextTemplateNodeEntry) {
        let [,nextTemplatePath] = nextTemplateNodeEntry
        Transforms.select(editor, nextTemplatePath);
    }
}

export const findPreviousTemplate = (editor: Editor, at?: Location): void => {
    let referencePoint = at || editor.selection!
    let [,startPoint] = Editor.node(editor, referencePoint)
    // console.log(startPoint)
    let [,endPoint] = Editor.first(editor, [])
    // console.log(endPoint)
    let searchSpan: Span = [startPoint, endPoint]
    // console.log(searchSpan)
    let nodeIterator = Editor.nodes(editor, { reverse: true, at: searchSpan, match: (node: Node) => node.type === "template-block", mode: "lowest", voids: true })
    // for (let pair of nodeIterator) {
    //     let [node, path] = pair;
    //     console.log(node, path)
    // }
    let lastTemplateNodeEntry
    if (!isTemplateBlock(editor, startPoint))
        [lastTemplateNodeEntry] = nodeIterator;
    else {
        lastTemplateNodeEntry = (Editor.previous(editor, {
            at: referencePoint,
            match: (node: Node) => node.type === "template-block",
            mode: 'lowest',
            voids: true
        }) as NodeEntry)
        // console.log(lastTemplateNodeEntry)
    }
    if (!!lastTemplateNodeEntry) {
        let [,lastTemplatePath] = lastTemplateNodeEntry
        Transforms.select(editor, lastTemplatePath)
    }
}

export function isTemplateBlock(editor: Editor, at: Location) {
    let [thisNode] = Editor.node(editor, at);
    let [parent] = Editor.parent(editor, at);
    // console.log(thisNode, parent)
    return Text.isText(thisNode) && parent.type === 'template-block'
}