import { Node, Text } from "slate";

export const serialiseMarkdown = (node: any) => {
    if (Text.isText(node)) {
        return Node.string(node);
    }

    const children = node.children.map((n: any) => serialiseMarkdown(n)).join('\n')

    switch (node.type) {
        case "heading-one":
            return `# ${children}`
        case "heading-two":
            return `## ${children}`
        default:
            return children
    }
}

export const serialiseHTML = (node: any) => {
    
}