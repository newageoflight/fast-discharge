import { SetterOrUpdater } from "recoil";
import { Editor, Descendant } from "slate";

export function saveDotAbbrev(editor: Editor, abbrevSetter: SetterOrUpdater<any>) {
    const { selection } = editor;
    const existingAbbrevs = localStorage.getItem("dotAbbrevs") && JSON.parse(localStorage.getItem("dotAbbrevs")!)
    // get the fragment
    let fragment = Editor.fragment(editor, selection!)
    // first a dialogue should pop up asking the user to name the fragment
    let fragmentName = window.prompt("Name this fragment: ")
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