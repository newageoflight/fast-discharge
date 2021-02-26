import { BoldPlugin, ExitBreakPlugin, ItalicPlugin, ParagraphPlugin, SoftBreakPlugin, UnderlinePlugin, withList, ResetBlockTypePlugin, isBlockAboveEmpty, isSelectionAtBlockStart, SubscriptPlugin, SuperscriptPlugin, withInlineVoid } from "@udecode/slate-plugins";
import { withHistory } from "slate-history";
import { withReact } from 'slate-react';
import { TemplateBlocksPlugin } from "./newPlugins/TemplateBlocks/TemplateBlocksPlugin";

import { HeadingPlugin } from './rewrittenPlugins/HeadingPlugin';
import { ListPlugin } from './rewrittenPlugins/ListPlugin';

export const HEADING_ELEMENTS = ["h1", "h2", "h3", "h4", "h5", "h6"]

export const resetBlockTypesCommonRule = {
    types: ["bold", "code_block", "todo_li"],
    defaultType: "p",
}

export const plugins = [
    ParagraphPlugin(),
    HeadingPlugin({
        h1: {
            hotkey: "mod+alt+1",
        },
        h2: {
            hotkey: "mod+alt+2",
        },
        h3: {
            hotkey: "mod+alt+3",
        },
        h4: {
            hotkey: "mod+alt+4",
        },
        h5: {
            hotkey: "mod+alt+5",
        },
        h6: {
            hotkey: "mod+alt+6",
        },
        levels: 6
    }),
    ListPlugin({
        ul: {
            hotkey: "mod+.",
        },
        ol: {
            hotkey: "mod+/",
        },
    }),
    BoldPlugin(),
    ItalicPlugin(),
    UnderlinePlugin(),
    SubscriptPlugin({
        subscript: {
            hotkey: "mod+-"
        }
    }),
    SuperscriptPlugin({
        superscript: {
            hotkey: "mod+="
        }
    }),
    ResetBlockTypePlugin({
        rules: [
            {
                ...resetBlockTypesCommonRule,
                hotkey: "enter",
                predicate: isBlockAboveEmpty,
            },
            {
                ...resetBlockTypesCommonRule,
                hotkey: "backspace",
                predicate: isSelectionAtBlockStart,
            },
        ],
    }),
    SoftBreakPlugin({
        rules: [
            {
                hotkey: 'shift+enter',
            },
            {
                hotkey: 'enter',
                query: {
                    allow: [
                        "code_block",
                        "blockquote",
                    ]
                }
            }
        ],
    }),
    ExitBreakPlugin({
        rules: [
            {
                hotkey: 'mod+enter',
                level: 0,
            },
            {
                hotkey: 'mod+shift+enter',
                before: true,
                level: 0,
            },
            {
                hotkey: 'enter',
                query: {
                    start: true,
                    end: true,
                    allow: HEADING_ELEMENTS,
                },
                level: 0,
            },
        ],
    }),
    TemplateBlocksPlugin(),
]

export const withPlugins = [withReact, withHistory, withInlineVoid({ plugins }), withList()] as const;