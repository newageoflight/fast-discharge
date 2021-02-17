import React from 'react'
import { Portal } from './utils/Portal';

// based on this example:
// https://github.com/ianstormtaylor/slate/blob/master/site/examples/mentions.tsx

// this will mainly be used for dot abbreviation expansion

interface Props {
    opts: string[];
    pos: number;
}

interface SelectItemProps {
    key: any;
    active: boolean;
}

export const HoverList = React.forwardRef<HTMLDivElement, Props>(({ opts, pos }: Props, ref) => {
    return (
        <Portal>
            <div className="abbreviation-selector" ref={ref}>
                {opts.map((opt, i) => (
                    <SelectItem key={opt} active={pos === i}>
                        {opt}
                    </SelectItem>
                ))
                }
            </div>
        </Portal>
    )
})

// The point of making this a separate component is that hopefully it'll be able to support onClick events
const SelectItem: React.FC<SelectItemProps> = ({ active, children }) => {
    return (
        <div className={`selector-item ${active ? "active-item" : ""}`}>
            {children}
        </div>
    )
}
