import React, { useState, useEffect } from 'react';
import '../../App.css'
import TranslateButtons from '../buttons/TranslateButtons';

function Search(word) {
  let { data } = word;

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

  const renderData = () => {
    if (data.length === 0) return <p className="noResult">PokéDex has not found it yet...</p>;
    if (data.arrayText !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{titleCase(data.name)}</td>
        {data.effect.map(effect => <td className="pokeData">{effect.effect}</td>)}
		<TranslateButtons />
      </>
    )
    } else if (data !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{titleCase(data.name)}</td>
		<TranslateButtons />
      </>)
    }
    return null
  }




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
