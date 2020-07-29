import React, { useState, useEffect } from 'react';
import '../../App.css'

function Search(word) {
  let { search } = word;
  let result;
  const [data, setData] = useState([]);

  const getAbility = (json) => {
    fetch(`https://pokeapi.co/api/v2/ability/${json.id}`)
      .then(res => res.json())
      .then(res => {
        setData({
          id: json.id,
          name: json.name,
          image: json.sprites.front_shiny,
          effect: res.effect_entries
        })
      })
      .catch(err => console.log(err))
  }

  const getPokemon = (search) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(res => res.json())
      .then(json => getAbility(json))
      .catch(function (error) {
        console.log('There was an ERROR: ', error);
      });
  }

  const renderData = () => {    
    if (data.effect !== undefined)
      return (<>
                <td><img src={data.image} alt={data.name}></img></td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.effect[0].effect}</td>
                <td>{data.effect[1].effect}</td>
              </>)

    return null
  }


  useEffect(() => {
    getPokemon(search)
  }, [search]);

  console.log(data.effect)

  return (

    <table className="container">
      <tr>
        {renderData()}
      </tr>

    </table>
  )
}

export default Search;
