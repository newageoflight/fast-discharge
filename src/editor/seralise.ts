import unified from "unified";
import stringify from "remark-stringify";
import { slateToRemark } from "remark-slate-transformer";
import { Editor, Node } from 'slate';
import { Transforms } from 'slate';

// TODO: fix this, lists and template blocks still don't work
// lmao when was the last time anything just plugged in and worked in software development???
// the better thing to do might just be to preprocess the nodes and then put them into a format that slateToRemark will understand
export const toMarkdown = (editor: Editor): string => {
    const processor = unified().use(slateToRemark).use(stringify);
    // preprocess the value first to replace any templateblocks with their defaultvalue
    const value = editor.children;

    const ast = processor.runSync({
        type: 'root',
        children: value,
    })
    console.log(ast)
    const text = processor.stringify(ast);
    return text;
}

export const toClipboardMD = (editor: Editor): void => {
    navigator.clipboard.writeText(toMarkdown(editor)).then(() => {
        console.log("Copied successfully!")
    }, () => {
        console.log("Copying failed!")
    })
}