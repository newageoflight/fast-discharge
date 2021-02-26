import { atom } from "recoil";
import { Descendant } from 'slate';

const existingAbbrevs = localStorage.getItem("dotAbbrevs")

export const DotAbbrevsState = atom<Record<string, Descendant[]>>({
    key: "DotAbbreviations",
    default: existingAbbrevs ? JSON.parse(existingAbbrevs) : {}
})