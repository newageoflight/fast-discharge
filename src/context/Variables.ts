import { atom } from "recoil";
import { TemplateVariable } from "../interfaces/Templates"

export const VariablesState = atom({
    key: "variables",
    default: ({} as Record<string, TemplateVariable>)
})