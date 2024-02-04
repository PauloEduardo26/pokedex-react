import styled from "styled-components";

export const StyledButton = styled.a`
    color: ${(props)=>props.theme.color};
    background-color: ${(props)=>props.theme.background};
    border: solid ${(props)=>props.theme.borderColor};
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
`
