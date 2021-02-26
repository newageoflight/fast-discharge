import styled from 'styled-components';

export const FancyButton = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    height: fit-content;
    padding: ${props => props.theme.main || "5px"};
    border-radius: 5px;
    font-size: 1rem;

    &:hover {
        background-color: #ddd;
    }

    &:active {
        background-color: #999;
    }
`