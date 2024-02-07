import styled from "styled-components";

export const StyledPokemonPage= styled.div`
    background-color: ${(props)=>props.theme.background};
    color: ${(props)=>props.theme.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    h1{
        text-transform: uppercase;
    }
    .small-images{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        flex-wrap: wrap;
    }
    .small-images img{
        margin: 0px 10px;
    }
    .big-image{
        max-height: 200px;
        max-width: 300px;
        padding: 30px;
    }
    .types{
        display: flex;
        gap: 50px;
    }
    .abilities{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 0px 20px;
    }
    .moves{
        column-gap: 100px;
        padding: 20px 0px;
    }
    @media (min-width: 500px) {
        .moves{
            column-count: 2;
        }
    }
    @media (min-width: 900px) {
        .moves{
            column-count: 3;
        }
    }
    @media (min-width: 1200px) {
        .moves{
            column-count: 4;
        }
    } 
`