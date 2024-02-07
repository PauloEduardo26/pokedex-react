import styled from "styled-components";

export const StyledInput = styled.input`
    color: ${(props)=>props.theme.color};
    border-color: ${(props)=>props.theme.borderColor};
    background-color: ${(props)=>props.theme.background};
    padding: 10px;
    border-style: solid;
    width: 50%;
`