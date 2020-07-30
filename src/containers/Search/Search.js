import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchPokemon from '../../components/search/SearchPokemon'
import './Search.css';

export default function Search() {
    let [typedSearch, setTypedSearch] = useState("");

    return (
        <><div className="searchBar">
            <table className="container">
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
            </table>
        </div>
      { typedSearch && <div className="searchResults"><SearchPokemon search={typedSearch} /></div> }</>
    )
}
