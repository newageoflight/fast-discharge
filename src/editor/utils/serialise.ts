import { Editor, Node, Text } from 'slate';
import unified from 'unified';
import { slateToRemark } from 'remark-slate-transformer';
import stringify from 'remark-stringify';
import * as clipboard from "clipboard-polyfill";
import { serializeHTMLFromNodes, SlatePlugin } from '@udecode/slate-plugins';

// two packages seem to work to this end:
// https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-slate/
// https://github.com/inokawa/remark-slate-transformer

type OptionType = {
    label: string,
    value: string
}

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
    let matches = textLines.map(s => !!s.match(/^\s*(-|\d+\.)\s+/g))
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
    // console.log(node)
    let newNode = {...node};

    if (newNode.children)
        newNode.children = (newNode.children as Node[]).map(templatesToText)

    switch (newNode.type) {
        case "template-block":
            switch (newNode.templateType) {
                case "select":
                    return {text: (newNode.defaultValue ? (newNode.defaultValue as OptionType).value : "")}
                case "multiselect":
                    // console.table(newNode.defaultValue)
                    return {text: (newNode.defaultValue ? (newNode.defaultValue as OptionType[]).map(opt => opt.value).join(", ") : "")}
                case "date":
                    let dateAsString, nodeDate;
                    if (newNode.defaultValue) {
                        nodeDate = (typeof newNode.defaultValue === "string") ? new Date(newNode.defaultValue) : newNode.defaultValue as Date;
                    } else {
                        nodeDate = new Date();
                    }
                    dateAsString = `${nodeDate.getDate()}/${nodeDate.getMonth() + 1}/${nodeDate.getFullYear()}`
                    // console.log(dateAsString)
                    return {text: dateAsString ? dateAsString : ""}
                default:
                    return {text: ""}
            }
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
        case "template-block":
            return templatesToText(node)
        case "p":
            return {...newNode, type: "paragraph"}
        case "h1":
            return {...newNode, type: "heading", depth: 1}
        case "h2":
            return {...newNode, type: "heading", depth: 2}
        case "h3":
            return {...newNode, type: "heading", depth: 3}
        case "h4":
            return {...newNode, type: "heading", depth: 4}
        case "h5":
            return {...newNode, type: "heading", depth: 5}
        case "h6":
            return {...newNode, type: "heading", depth: 6}
        case "ul":
            return {...newNode, type: "list", ordered: false}
        case "ol":
            return {...newNode, type: "list", ordered: true}
        case "li":
            return {...newNode, type: "listItem"}
        default:
            return newNode
    }
}

export const toClipboardHTML = (editor: Editor, plugins: SlatePlugin[]): void => {
    // can't use the new async clipboard API because it doesn't support rich text
    // i normally try to avoid installing packages if i can help it but anyway, here we are
    const item = new clipboard.ClipboardItem({
        "text/html": new Blob([serializeHTMLFromNodes({ plugins, nodes: editor.children })], {type: "text/html"}),
    })
    try {
        clipboard.write([item]);
        window.alert("Copied successfully!")
    } catch (error) {
        window.alert("Copying failed!")
    }
}