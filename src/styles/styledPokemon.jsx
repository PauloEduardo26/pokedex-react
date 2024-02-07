import styled from "styled-components";

export const StyledPokemon = styled.li`
    background-color: ${(props)=>props.theme.background};
    color: ${(props)=>props.theme.color};
    border-color: ${(props)=>props.theme.borderColor};
    width: 200px;
    border-style: solid;
    margin: 15px;
    padding: 5px;
    border-radius: 10%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .types{
        display:flex;
        width: 100%;
        justify-content: space-around;
    }
    .pokemon-name{
        text-transform: uppercase;
    }
`
