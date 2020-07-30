import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchPokemon from '../../components/search/SearchPokemon'
import '../App/App.css';

export default function Search() {
    let [typedSearch, setTypedSearch] = useState("");
    const [data, setData] = useState([]);
  
    const getDescription = (json) => {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${json.name}`)
        .then(res => res.json())
        .then(res => {//console.log("aqui ",res);
  
          setData({
            id: json.id,
            name: json.name,
            image: json.sprites.front_default,
            arrayText: res.flavor_text_entries
          });
        })
        .catch(err => {
          console.log("ability", err);
        })
    }
  
    const getPokemon = (search) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(res => res.json())
        .then(json => {//console.log(json)
          setData({
            id: json.id,
            name: json.name,
            image: json.sprites.front_default
          });
          getDescription(json)
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getPokemon(typedSearch)
      }, [typedSearch]);

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
      { typedSearch && <div className="searchResults"><SearchPokemon data={data} /></div> }</>
    )
}