import { useLocation, Link } from "react-router-dom";
import { StyledType } from "../styles/styledTypes";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StyledPokemonPage } from "../styles/styledPokemonPage";
import { ThemeProvider } from "styled-components";
import { ThemeContext, light, dark } from "../contexts/theme-context";

const PokemonPage = () => {
    const location = useLocation();
    const data = location.state?.data
    const abilitiesEndpoints = data.abilities.map(ability=>ability.ability.url);
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const responses = await Promise.all(abilitiesEndpoints.map((endpoint) => axios.get(endpoint)));
            const dataFromResponses = responses.map((response) => response.data);
            setResponseData(dataFromResponses);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      
    const descriptions = responseData.map( e => e.effect_entries[1].effect)

    const { theme, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
    
        if (savedTheme) {
          toggleTheme(savedTheme);
        }
    }, [toggleTheme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <StyledPokemonPage>
                    <Link to="/" style={{color: '#61dafb'}}>Voltar para o Menu</Link>
                    <h1>{data.name}</h1>
                    <img className="big-image" src={data?data.sprites.other.showdown.front_default:"<div>Loading...</div>"} alt={data.name}/>
                    <div className="small-images">
                        <img src={data?data.sprites.front_default:"<div>Loading...</div>"} alt={data.name}/>
                        <img src={data?data.sprites.back_default:"<div>Loading...</div>"} alt={data.name}/>
                        <img src={data?data.sprites.front_shiny:"<div>Loading...</div>"} alt={data.name}/>
                        <img src={data?data.sprites.back_shiny:"<div>Loading...</div>"} alt={data.name}/>
                    </div>
                    
                    <div className="types">
                        {data.types.map(types =>(
                            <StyledType key={types.type.name} type={types.type.name}>{types.type.name}</StyledType>
                        ))}
                    </div>
                    <h3>Abilities:</h3>
                    {data.abilities.map((abilities, index) =>(
                        <div className="abilities" key={abilities.ability.name}>
                            <h4>{abilities.ability.name}</h4>
                            <p>"{descriptions[index]}"</p>
                        </div>
                    ))}
                    <p></p>
                    <h3>Moves:</h3>
                    <ul className="moves">
                        {data.moves.map(moves =>(
                            <li key={moves.move.name}>{moves.move.name}</li>
                        ))}
                    </ul>     
                </StyledPokemonPage>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
export { PokemonPage }


