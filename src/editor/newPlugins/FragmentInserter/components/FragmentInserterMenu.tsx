import React, { MouseEventHandler, useEffect, useRef } from 'react'
import { Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import styled from 'styled-components';
import { DotAbbreviationRecord, DotAbbreviationValueProps } from '../interfaces/DotAbbrevMeta';

import { Portal } from './Portal';

interface Props {
    at: Range | null | undefined,
    options: DotAbbreviationRecord,
    pos: number,
    onClickItem?: (editor: ReactEditor, option: [key: string, value: DotAbbreviationValueProps]) => void,
}

interface SelectItemProps {
    active: boolean;
    onClick: MouseEventHandler;
}

export const FragmentInserterMenu: React.FC<Props> = ({ at, options, pos, onClickItem }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const editor = useSlate();

    useEffect(() => {
        if (at && Object.keys(options).length > 0) {
            const el = ref.current;
            const domRange = ReactEditor.toDOMRange(editor, at)
            const rect = domRange.getBoundingClientRect();

            if (el) {
                el.style.top = `${rect.top + window.pageYOffset + 24}px`
                el.style.left = `${rect.left + window.pageXOffset}px`
            }
        }
    }, [options, editor, at])
    
    if (!at || !Object.keys(options).length)
        return null

    return (
        <Portal>
            <HangingMenu ref={ref}>
                {Object.entries(options).map(([opt, optVal], i) => (
                    <SelectItem key={opt} active={pos === i} onClick={e => onClickItem && onClickItem(editor, [opt, optVal])}>
                        <div className="name">
                            {opt}
                        </div>
                        <div className="description">
                            {optVal.description}
                        </div>
                    </SelectItem>
                ))
                }
            </HangingMenu>
        </Portal>
    )
}

const SelectItem: React.FC<SelectItemProps> = ({ active, children, onClick }) => {
    return (
        <div className={`selector-item ${active ? "active-item" : ""}`} onMouseDown={onClick}>
            {children}
        </div>
    )
}

const HangingMenu = styled.div`
    top: -9999px;
    left: -9999px;
    position: absolute;
    z-index: 1;
    padding: 3px;
    background: #eee;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    overflow-y: scroll;
    max-width: 40vw;
    max-height: 10rem;
    
    .selector-item {
        padding: 1px 3px;
        border-radius: 3px;
        background-color: transparent;
        cursor: pointer;
        transition: 0.3s ease all;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .name {
            font-weight: bold;
            margin-right: 10px;
            text-align: left;
        }

        .description {
            display: flex;
            flex-grow: 1;
            color: #444;
            font-size: 0.8rem;
            justify-content: right;
        }

        &:hover {
            background-color: #d2e6ff;
        }
        
        &:active {
            background-color: #a2c036;
        }
    }

    .active-item {
        background-color: #b4d5ff;
    }

`