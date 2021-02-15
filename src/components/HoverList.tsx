import React from 'react'
import { Portal } from './utils/Portal';

// based on this example:
// https://github.com/ianstormtaylor/slate/blob/master/site/examples/mentions.tsx

// this will mainly be used for dot abbreviation expansion

interface Props {
    opts: string[];
    pos: number;
}

export const HoverList = React.forwardRef<HTMLDivElement, Props>(({ opts, pos }: Props, ref) => {
    return (
        <Portal>
            <div className="abbreviation-selector" ref={ref}>
                {opts.map((opt, i) => (
                    <div className={`selector-item ${pos === i ? 'active-item' : ''}`} key={opt}>
                        {opt}
                    </div>
                ))
                }
            </div>
        </Portal>
    )
})

// export const HoverList: React.FC<Props> = ({ opts, pos }) => {
//     const ref = useRef<HTMLDivElement | null>(null);

//     return (
//         <Portal>
//             <div className="abbreviation-selector" ref={ref}>
//                 {opts.map((opt, i) => (
//                     <div className={`selector-item ${pos === i ? "active-item" : ""}`} key={opt}>
//                         {opt}
//                     </div>
//                 ))}
//             </div>
//         </Portal>
//     )
// }
