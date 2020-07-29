import React from 'react';
//import api from './services/api.js';
import { AiOutlineSearch } from 'react-icons/ai';
import './App.css';

function App() {
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
              <input type="text" placeholder="Got a favorite Pokémon?" className="searchBox"/>
            </td>
            <td>
              <AiOutlineSearch className="searchIcon"/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
