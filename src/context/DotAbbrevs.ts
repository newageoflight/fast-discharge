import { atom } from "recoil";
import { Descendant } from "slate";

const existingAbbrevs = localStorage.getItem("dotAbbrevs")

export const DotAbbrevsState = atom({
    key: "DotAbbreviations",
    default: existingAbbrevs ? (JSON.parse(existingAbbrevs) as Record<string, Descendant[]>) : ({} as Record<string, Descendant[]>)
})