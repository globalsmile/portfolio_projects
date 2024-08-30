import React from 'react';
import ApolloClient from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { PokemonsContainer } from './containers/PokemonsContainer';

export default function App() {
    const client = new ApolloClient({
	    uri: 'https://graphql-pokemon2.vercel.app/'
    });
    
    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer />
            </main>
        </ApolloProvider>
    )
}
