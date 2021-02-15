import { atom } from "recoil";

const existingAbbrevs = localStorage.getItem("dotAbbrevs")

export const DotAbbrevsState = atom({
    key: "DotAbbreviations",
    default: existingAbbrevs ? JSON.parse(existingAbbrevs) : null
})