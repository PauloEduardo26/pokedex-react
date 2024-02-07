import { Card } from '../components/card'
import React, { useEffect, useState, useRef } from "react";
import { StyledMenu } from "../styles/styledMenu";
import { StyledButton } from "../styles/styledButton";
import { baseUrl } from "../variables";
import { StyledInput } from "../styles/styledInput";
import { StyledHeader } from "../styles/styledHeader";
import { ThemeProvider } from 'styled-components';
import { ThemeContext, dark, light } from "../contexts/theme-context";
import {ThemeToggler} from '../components/toggleTheme/';
import logopokemon from '../logopokemon.png';

const Menu = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(`${baseUrl}/pokemon?offset=0&limit=10`);
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(true);
    const [query, setQuery] = useState('');
    const [theme, toggleTheme] = useState('dark')
    
    const getAllPokemons = async () => {
        setLoading(true);
        const res = await fetch(currentPageUrl);
        const data = await res.json();

        setCurrentPageUrl(data.next);

        function createPokemonObject(results) {
            results.forEach(async (pokemon) => {
                const res = await fetch(`${baseUrl}/pokemon/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons(allPokemons => [...allPokemons, data]);          
            });
        }
        createPokemonObject(data.results)
        setLoading(false);
    }

    useEffect(() => {
        if (isMounted.current) {
            getAllPokemons();
            isMounted.current = false;
        }
    }, []);

    if (loading) return 'Wait a minute, loading...';
   
    let filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.types[0].type.name.toLowerCase().includes(query.toLowerCase()) ||
        (pokemon.types[1] && pokemon.types[1].type.name.toLowerCase().includes(query.toLowerCase()))
    );

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme === 'light' ? dark : light}>
                <StyledMenu>
                    <StyledHeader>
                        <img src={logopokemon} alt='logo do pokémon'/>
                        <StyledInput
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Type..."
                        />
                        <ThemeToggler/>
                    </StyledHeader>
                    <Card filteredPokemons={filteredPokemons}></Card>
                    <StyledButton onClick={() => getAllPokemons()}>Load More</StyledButton>
                </StyledMenu> 
            </ThemeProvider>  
        </ThemeContext.Provider>     
    )
}
export { Menu }