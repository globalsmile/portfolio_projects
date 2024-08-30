import React from 'react';
import { useQuery } from '@apollo/client';
import { Pokemon } from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsContainer() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container">
            {data.pokemons && data.pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};