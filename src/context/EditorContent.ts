import { atom } from 'recoil';
import { SlateDocument } from '@udecode/slate-plugins';
import { Editor, Node, Path } from 'slate';
import { OptionType, legalVariableTypes, TemplateBlockNode, TemplateVariable } from '../editor/newPlugins/TemplateBlocks/interfaces/Templates';

const EditorState = localStorage.getItem("content")

export const EditorContentState = atom<SlateDocument>({
    key: "EditorState",
    default: EditorState ? JSON.parse(EditorState) : {}
})

export const EditorVariablesState = atom<Record<string, TemplateVariable>>({
    key: "EditorVariables",
    default: {}
})

// this should only run when a template changes
export const findTemplateVariables = (editor: Editor): Record<string, TemplateVariable> => {
    const [,startPoint] = Editor.first(editor, [])
    const [,endPoint] = Editor.last(editor, [])
    // console.log([startPoint, endPoint])
    let templateNodes = Editor.nodes(editor, { at: [startPoint, endPoint] , match: (node: Node) => node.type === "template-block", voids: true, mode: "lowest" })
    // store the name, type and content of each block in the variables state atom
    // these can then be used to perform calculations etc.
    let variables = {} as Record<string, TemplateVariable>
    for (let entry of templateNodes) {
        // console.log(entry)
        let [node] = entry as [node: TemplateBlockNode, path: Path];
        if (node.type === "template-block") {
            node = node as TemplateBlockNode;
            if (node.templateType && legalVariableTypes.includes(node.templateType)) {
                // typecasting
                let val;
                if (node.defaultValue != null) {
                    switch (node.templateType) {
                        case "date":
                            val = (typeof node.defaultValue === "string") ? new Date(node.defaultValue) : node.defaultValue as Date;
                            break;
                        case "number":
                            val = node.defaultValue as number;
                            break;
                        case "select":
                            val = (node.defaultValue as OptionType).value;
                            break;
                        case "multiselect":
                            val = (node.defaultValue as OptionType[]).map(opt => opt.value);
                            break;
                        default:
                            val = (node.defaultValue as any);
                            break;
                    }
                }
                if (node.name)
                    variables[(node.name as string)] = {templateType: (node.templateType as TemplateVariable["templateType"]), value: val}
                else
                    variables[(node.uid as string)] = {templateType: (node.templateType as TemplateVariable["templateType"]), value: val}
            }
        }
    }
    return variables;
}