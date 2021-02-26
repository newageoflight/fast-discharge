import { atom } from "recoil";
import { DotAbbreviationRecord } from "../editor/newPlugins/FragmentInserter/interfaces/DotAbbrevMeta";

const existingAbbrevs = localStorage.getItem("dotAbbrevs")

export const DotAbbrevsState = atom<DotAbbreviationRecord>({
    key: "DotAbbreviations",
    default: existingAbbrevs ? JSON.parse(existingAbbrevs) : {}
})