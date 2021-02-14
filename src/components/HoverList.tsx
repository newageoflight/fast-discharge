import React, { useEffect, useRef } from 'react'
import { Portal } from './utils/Portal';
import { ReactEditor } from 'slate-react';
import { Range } from 'slate';

// based on this example:
// https://github.com/ianstormtaylor/slate/blob/master/site/examples/mentions.tsx

// this will mainly be used for dot abbreviation expansion

interface Props {
    opts: string[];
    pos: number;
    isActive: boolean;
    editor: ReactEditor;
    target: Range;
    deps?: any[];
}

export const HoverList: React.FC<Props> = ({ opts, pos, isActive, editor, target, deps }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (isActive) {
            const el = ref.current;
            const domRange = ReactEditor.toDOMRange(editor, target)
            const rect = domRange.getBoundingClientRect()
            el!.style.top = `${rect.top + window.pageYOffset + 24}px`
            el!.style.left = `${rect.left + window.pageXOffset}px`
        }
        // eslint-disable-next-line
    }, deps)

    return (
        <Portal>
            <div className="abbreviation-selector" ref={ref}>
                {opts.map((opt, i) => {
                    <div className={`selector-item ${pos === i ? "active-item" : ""}`} key={opt}>
                        {opt}
                    </div>
                })}
            </div>
        </Portal>
    )
}
