import React, { useState, useEffect } from 'react';
import '../../App.css'

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

  const getAbility = (json) => {
    fetch(`https://pokeapi.co/api/v2/ability/${json.id}`)
      .then(res => res.json())
      .then(res => {
        setData({
          id: json.id,
          name: json.name,
          image: json.sprites.front_shiny,
          effect: res.effect_entries
        });
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
          image: json.sprites.front_shiny
        });
        getAbility(json)
      })
      .catch(function (error) {
        console.log('aqui getpoke', error);
      });
  }

  const renderData = () => {
    if (data.effect !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td className="pokeData">{titleCase(data.name)}</td>
        {data.effect.map(effect => <td className="pokeData">{effect.effect}</td>)}
      </>
    )
    } else if (data !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td className="pokeData">{titleCase(data.name)}</td>
      </>)
    }
    return null
  }


  useEffect(() => {
    getPokemon(search)
  }, [search]);

  //console.log(data)

  return (

    <table className="container">
      <tr>
        {renderData()}
      </tr>

    </table>
  )
}

export default Search;
