import React, { useState } from 'react';
//import api from './services/api.js';
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';
import SearchPokemon from './components/search/SearchPokemon'

function App() {
  let [typedSearch, setTypedSearch] = useState("");
  let debounceTime = null;

  const debounceTyping = (typedSearch) => {
    clearTimeout(debounceTime);

    debounceTime = setTimeout(() => {
      setTypedSearch(typedSearch);
    }, 1000)

  }

  return (
    <div className="mainView">
      <header>
        <h1>
          PoKé React
        </h1>
      </header>
      <div className="headerSpacer"></div>
      <div className="searchBar">
        <table className="container">
          <tr>
            <td>
              <input
                type="text"
                placeholder="Got a favorite Pokémon?"
                className="searchBox"
                onChange={e => debounceTyping(e.target.value)}
              />
            </td>
            <td>
              <AiOutlineSearch className="searchIcon" />
            </td>
          </tr>
        </table>
      </div>
      {typedSearch && <div className="searchResults"><SearchPokemon search={typedSearch} /></div>}
    </div>
  );
}

export default App;