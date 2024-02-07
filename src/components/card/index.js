import { StyledPokemon } from "../../styles/styledPokemon";
import { StyledPokemons } from "../../styles/styledPokemons";
import { StyledType } from "../../styles/styledTypes";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ filteredPokemons }) => {
  
  return (
      <StyledPokemons>
        {filteredPokemons.map((p) => (
          <Link key={p.name} to="/pokemonPage" state={{ data: p }}>
            <StyledPokemon key={p.name}>
              <img src={p ? p.sprites.front_default : '<div>loading...</div>'} alt={p.name}/>
              <p>#{p.id}</p>
              <p className="pokemon-name">{p.name}</p>
              <div className="types">
                {p.types.map((types) => (
                  <StyledType key={types.type.name} type={types.type.name}>
                    {types.type.name}
                  </StyledType>
                ))}
              </div>
            </StyledPokemon>
          </Link>
        ))}
      </StyledPokemons>
  );
};

export { Card };
