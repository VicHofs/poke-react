import PokeHead from './components/head/PokeHead'
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchPokemon from './components/search/SearchPokemon'

function App() {
  let [typedSearch, setTypedSearch] = useState("");

  return (<>
    <PokeHead/>
    <div className="mainView">
      <header>
        <h1>
          PoKé React
        </h1>
      </header>
      <div className="headerSpacer"></div>
      <div className="searchBar">
        <table className="container">
          <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Got a favorite Pokémon?"
                className="searchBox"
                onChange={e => setTypedSearch(e.target.value)}
              />
            </td>
            <td>
              <AiOutlineSearch className="searchIcon" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      {typedSearch && <div className="searchResults"><SearchPokemon search={typedSearch} /></div>}
    </div></>
  );
}

export default App;