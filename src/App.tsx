import React from 'react';
import './style.css';
const App = () => {
  return (
    <div>
      <h1>Available Pokemons</h1>
      <div>
        <div className="row">
          <span>Pokemon #94 = ectoplasma (spectre/poison)</span>
          <button className="action" value="94">
            Catch Me!
          </button>
        </div>
        <div className="row">
          <span>Pokemon #42 = nosferalto (poison/vol)</span>
          <button className="action" value="42">
            Catch Me!
          </button>
        </div>
        <div className="row">
          <span>Pokemon #74 = racaillou (roche/sol)</span>
          <button className="action" value="74">
            Catch Me!
          </button>
        </div>
        <div className="row">
          <span>Pokemon #24 = arbok (poison)</span>
          <button className="action" value="24">
            Catch Me!
          </button>
        </div>
      </div>
      <h2>My Pokedex</h2>
      <div>No pokemon :(</div>
    </div>
  );
};
export default App;
