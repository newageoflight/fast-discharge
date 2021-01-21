import Prism from "prismjs";
import React, { useState, useCallback, useMemo } from 'react';
import { Slate, Editable, withReact } from "slate-react";
import { Node, Range, Text, createEditor } from "slate";
import { withHistory } from "slate-history";

import { Leaf } from './Leaf';

// eslint-disable-next-line
;Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

export const MarkdownEditor: React.FC = () => {
    const [value, setValue] = useState<Node[]>()
    const renderLeaf = useCallback(
        props => (
            <Leaf {...props}/>
        ),
        []
    )
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const decorate = useCallback(([node, path]) => {
        const ranges: Range[] = [];

        if (!Text.isText(node))
            return ranges;

        const getLength = (token: any) => {
            if (typeof token === "string")
                return token.length
            else if (typeof token.content === "string")
                return token.content.length
            else
                return token.content.reduce((l: number, t: any) => l + getLength(t), 0)
        }

        const tokens = Prism.tokenize(node.text, Prism.languages.markdown);

        let start = 0;
        for (const token of tokens) {
            const length = getLength(token)
            const end = start + length

            if (typeof token !== "string") {
                ranges.push({
                    [token.type]: true,
                    anchor: { path, offset: start },
                    focus: { path, offset: end },
                })
            }

            start = end;
        }

        return ranges;
    }, [])

    return (
        <Slate editor={editor} value={value!} onChange={value => setValue(value)}>
            <Editable 
                decorate={decorate}
                renderLeaf={renderLeaf}
                placeholder="Write some text/markdown..."
            />
        </Slate>
    )
}
