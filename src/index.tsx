import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/**
 * Instructions :
 *  - Replace hard coded table by call to PokemonService
 *  - Track every time CatchMe! button is pressed on any line
 *  - Display the catched pokemons on my pokedex
 */
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
