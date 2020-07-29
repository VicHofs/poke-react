import React, { useState, useEffect } from 'react';
//import api from './services/api.js';
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';
import Search from './components/search/Search'

function App() {
  let [search, setSearch] = useState("");

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
                onChange={e => setSearch(e.target.value)}
              />
            </td>
            <td>
              <AiOutlineSearch className="searchIcon" />
            </td>
          </tr>
        </table>      
      </div>
      <div className="searchResults">
          <Search search={search} />
        </div>
    </div>
  );
}

export default App;
