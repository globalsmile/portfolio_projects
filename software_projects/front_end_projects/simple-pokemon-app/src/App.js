import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache }  from '@apollo/client';
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';
export default function App() {
    const client = new ApolloClient({
	    uri: 'https://graphql-pokemon2.vercel.app/',
        cache: new InMemoryCache()
    });
    
    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer />
            </main>
        </ApolloProvider>
    )
};
