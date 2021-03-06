import React from 'react'
import styled from 'styled-components';

export const FunctionButtonsContainer: React.FC = ({ children }) => {
    return (
        <HorizontalScroller>
            {children}
        </HorizontalScroller>
    )
}

const HorizontalScroller = styled.div`
    display: flex;
    flex-grow: 1;
    overflow-x: scroll;
    scrollbar-width: none;
    
    > .slate-ToolbarButton {
        min-width: 25px;
    }
    
    &::-webkit-scrollbar {
        height: 0;
    }
`