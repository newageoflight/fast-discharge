import { SetterOrUpdater } from "recoil";
import { Editor, Descendant } from "slate";
import { DotAbbreviationMetaProps } from "../interfaces/DotAbbrevMeta";

export function saveDotAbbrev(editor: Editor, abbrevSetter: SetterOrUpdater<any>, nameSetter?: () => DotAbbreviationMetaProps) {
    const { selection } = editor;
    const existingAbbrevs = localStorage.getItem("dotAbbrevs") && JSON.parse(localStorage.getItem("dotAbbrevs")!)
    // get the fragment
    let fragment = Editor.fragment(editor, selection!)
    // first a dialogue should pop up asking the user to name the fragment
    let {name: fragmentName} = nameSetter ? nameSetter() : defaultNameSetter()
    let fragmentObject: Record<string,Descendant[]> = {}
    fragmentObject[fragmentName!] = fragment;
    let newAbbrevs;
    if (existingAbbrevs) {
        newAbbrevs = {...existingAbbrevs, ...fragmentObject}
    } else {
        newAbbrevs = {...fragmentObject}
    }
    abbrevSetter(newAbbrevs);
    localStorage.setItem("dotAbbrevs", JSON.stringify(newAbbrevs))
}

function defaultNameSetter(): DotAbbreviationMetaProps {
    let name = window.prompt("Name this fragment: ")
    while (!name) {
        name = window.prompt("Name this fragment: ")
    }
    return {name}
}