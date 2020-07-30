import React, { useState, useEffect } from 'react';
import '../../App.css'
import Dropdown from '../buttons/Dropdown';

function Search(word) {
  let { search } = word;
  const [data, setData] = useState([]);

  const titleCase = (string) => {
    if (string !== undefined) {
      if (string.includes('-')) {
        string = string.slice(0,string.indexOf('-'));
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const formatId = (id) => {
    if (id !== undefined) {
      return '#' + id;
    }
  }

  const getDescription = (json) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${json.name}`)
      .then(res => res.json())
      .then(res => {
        setData({
          id: json.id,
          name: json.name,
          image: json.sprites.front_default,
          description: res.flavor_text_entries
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getPokemon = (search) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(res => res.json())
      .then(json => {
        setData({
          id: json.id,
          name: json.name,
          image: json.sprites.front_default
        });
        getDescription(json)
      })
      .catch(function (error) {
        console.log('aqui getpoke', error, data);
      });
  }

  const renderData = () => {
    if (data.length === 0) return <p className="noResult">Searching the PokéDex...</p>;
    if (data.description !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{titleCase(data.name)}</td>
        {data.description.filter((entry) => entry.language.name === 'en' && entry.version.name === 'x').map(entry => <td className="pokeData">{entry.flavor_text}</td>)}
		<Dropdown />
      </>
    )
    } 
    else if (data !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{titleCase(data.name)}</td>
		<Dropdown />
      </>)
    }
    return null
  }


  useEffect(() => {
    getPokemon(search)
  }, [search]);

  return (

    <table className="container">
      <tr>
        {renderData()}
      </tr>

    </table>
  )
}

export default Search;
