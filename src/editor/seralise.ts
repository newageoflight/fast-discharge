import { Editor, Node, Text } from 'slate';
import unified from 'unified';
import { slateToRemark } from 'remark-slate-transformer';
import stringify from 'remark-stringify';
import escapeHTML from "escape-html";
import * as clipboard from "clipboard-polyfill";

// two packages seem to work to this end:
// https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-slate/
// https://github.com/inokawa/remark-slate-transformer

export const toMarkdown = (editor: Editor): string => {
    const preprocessed = editor.children.map(preprocessMDNode)
    const processor = unified().use(slateToRemark).use(stringify, {bullet: "-"})
    const ast = processor.runSync({
        type: "root",
        children: preprocessed,
    });
    const text = processor.stringify(ast);
    // i can't figure out how to remove the unnecessary line breaks in the lists using remark's serialiser
    // so i'm going to do it the stupid way using regex
    let textLines = text.split("\n")
    // convert to a boolean index of where there are list items or not
    // this will miss empty list items - the serialiser only introduces the spaces after the bullet point when there is content in the item
    let matches = textLines.map(s => !!s.match(/^\s*(-|[0-9A-Za-z]+\.)\s+/g))
    // look for a true/false/true block
    // it's easier if you just convert it to a string and use regex but again this feels very dumb to me for some reason
    let matchString = matches.map(s => s ? 't' : 'f').join('')
    let tftBlocks = matchString.matchAll(/t(ft)+/g)
    let toRemove: number[] = []
    for (let tft of tftBlocks) {
        let [matched] = tft;
        let { index } = tft;
        // i wish there was a way to do this without the filter or the spread operator but js is dumb
        let fPos = [...matched].map((val, idx) => (val === 'f') ? (index!+idx) : -1).filter(val => (val >= 0))
        toRemove = toRemove.concat(fPos)
    }
    let finalLines = textLines.map((val, idx) => (!toRemove.includes(idx)) ? val : null).filter(val => val !== null)
    let fixedText = finalLines.join('\n')

    return fixedText;
}

export const toClipboardMD = (editor: Editor): void => {
    navigator.clipboard.writeText(toMarkdown(editor)).then(() => {
        window.alert("Copied successfully!")
    }, () => {
        window.alert("Copying failed!")
    })
}

const templatesToText = (node: Node): Node => {
    let newNode = {...node};

    if (newNode.children)
        newNode.children = (newNode.children as Node[]).map(templatesToText)

    switch (newNode.type) {
        case "template-block":
            return {text: (newNode.defaultValue ? (newNode.defaultValue as {label:string,value:string}).label : "")}
        default:
            return newNode
    }
}

const preprocessMDNode = (node: Node): Node => {
    let newNode = {...node};
    // preprocess text nodes so that they return the right formatting
    if (Text.isText(newNode)) {
        newNode.strong = newNode.bold
        newNode.emphasis = newNode.italic
    }

    if (newNode.children)
        newNode.children = (newNode.children as Node[]).map(preprocessMDNode)

    switch (newNode.type) {
        case "heading-one":
            return {...newNode, type: "heading", depth: 1}
        case "heading-two":
            return {...newNode, type: "heading", depth: 2}
        case "heading-three":
            return {...newNode, type: "heading", depth: 3}
        case "heading-four":
            return {...newNode, type: "heading", depth: 4}
        case "numbered-list":
            return {...newNode, type: "list", ordered: true}
        case "bulleted-list":
            return {...newNode, type: "list", ordered: false}
        case "list-item":
            return {...newNode, type: "listItem"}
        case "template-block":
            return {text: (newNode.defaultValue ? (newNode.defaultValue as {label:string,value:string}).label : "")}
        default:
            return newNode
    }
}

export const toHTML = (editor: Editor): string => {
    const preprocessed = editor.children.map(templatesToText)
    return preprocessed.map(nodeToHTML).join('')
}

const nodeToHTML = (node: Node): string => {
    if (Text.isText(node)) {
        let nodeText = escapeHTML(node.text)
        
        if (node.bold)
            nodeText = `<strong>${nodeText}</strong>`

        if (node.italic)
            nodeText = `<em>${nodeText}</em>`

        if (node.underline)
            nodeText = `<u>${nodeText}</u>`
        
        return nodeText
    }
    
    const children = node.children.map((n: Node) => nodeToHTML(n)).join('')

    switch (node.type) {
        case "heading-one":
            return `<h1>${children}</h1>`
        case "heading-two":
            return `<h2>${children}</h2>`
        case "heading-three":
            return `<h3>${children}</h3>`
        case "heading-four":
            return `<h4>${children}</h4>`
        case "bulleted-list":
            return `<ul>${children}</ul>`
        case "numbered-list":
            return `<ol>${children}</ol>`
        case "list-item":
            return `<li>${children}</li>`
        default:
            return children
    }
}

export const toClipboardHTML = (editor: Editor): void => {
    // can't use the new async clipboard API because it doesn't support rich text
    // i normally try to avoid installing packages if i can help it but anyway, here we are
    const item = new clipboard.ClipboardItem({
        "text/html": new Blob([toHTML(editor)], {type: "text/html"}),
    })
    clipboard.write([item]);
}