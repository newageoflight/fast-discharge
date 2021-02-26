import { Descendant } from 'slate';

export interface DotAbbreviationMetaProps {
    name: string;
    description?: string;
}

export interface DotAbbreviationValueProps {
    value: Descendant[];
    description?: string;
}

export type DotAbbreviationRecord = Record<string, DotAbbreviationValueProps>;