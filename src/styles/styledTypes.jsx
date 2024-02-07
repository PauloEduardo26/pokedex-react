import styled from "styled-components";
import { colours } from '../styles/typecolors'

export const StyledType = styled.p`
    background-color: ${(props) => colours[props.type]};
    border-color: ${(props)=>props.theme.borderColor};
    border-radius: 10px;
    padding: 5px;
    border-style: solid;
    width: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-width: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
`;