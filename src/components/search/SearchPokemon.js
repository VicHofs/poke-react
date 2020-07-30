import React from 'react';
import '../../containers/App/App.css'
import DropdownMenu from '../dropdownMenu/DropdownMenu.js';

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
    if (data.length === 0) return <p className="noResult">No PokéDex matches</p>;
    if (data.arrayText !== undefined) {
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{titleCase(data.name)}</td>
        <td><div className="divider"></div></td>
        <td><DropdownMenu data={data}/></td>
        {/* {data.arrayText.map(text => <td className="pokeData">{text.flavor_text}</td>)} */}
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