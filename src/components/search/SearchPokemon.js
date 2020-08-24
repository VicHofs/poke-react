import React, { useState, useEffect } from 'react';
import loader from '../../assets/loader.png';
import '../../App.css'
import Dropdown from '../buttons/Dropdown';

function Search(word) {
  let { search } = word;
  const [data, setData] = useState([]);
  const [flavorVersion, setFlavorVersion] = useState({lang: 'en', ver: 'alpha-sapphire'});
  //const [description, setDescription] = useState(<p className="pokeData">Checking the PokéDex...</p>);

  const versionHandler = (selection) => {
    console.log('event: ', selection);
    selection = selection.split('—')
    setFlavorVersion({
      lang: selection[0],
      ver: selection[1]
    });
   }

  const declutter = (string) => {
    return string.replace(String.fromCharCode(12), ' ');
  }

  const titleCase = (string) => {
    if (string !== undefined) {
      if (string.includes('-') && string.charAt(string.indexOf('-')-1) !== 'o') {
        string = string.slice(0,string.indexOf('-'));
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const formatId = (id) =>  '#' + id;

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
        console.log( error, data);
      });
  }

  const renderData = () => {
    if (data.length === 0) return <p className="noResult">No PokéDex matches</p>;
    if (data.description !== undefined) {
      
      return (
      <>
        <td><img src={data.image} alt={data.name}></img></td>
        <td><div className="divider"></div></td>
        <td className="pokeData">{data.id && formatId(data.id)}</td>
        <td><div className="divider"></div></td>
        <td className="pokeData">
          <div className="descriptionDiv">
            <p className="pokeDataTitle">{titleCase(data.name)}</p>
            <div className="spacer"></div>
            {data.description.filter((entry) => entry.language.name === flavorVersion.lang && entry.version.name === flavorVersion.ver).map(entry => <p className="pokeData">{declutter(entry.flavor_text)}</p>)}
          </div>
        </td>
		<Dropdown data={data.description} onChange={(e) => versionHandler(e.target.value)}/>
      </>
    )
    } 
    // else if (data !== undefined) {
    //   return (
    //   <>
    //     <td><img src={data.image} alt={data.name}></img></td>
    //     <td><div className="divider"></div></td>
    //     <td className="pokeData">{formatId(data.id)}</td>
    //     <td><div className="divider"></div></td>
    //     <td className="pokeData">{titleCase(data.name)}</td>
		// <Dropdown data={data.description} />
    //   </>)
    // }
    return <img className="loader" src={loader} alt="loading..."/>;
  }


  useEffect(() => {
    getPokemon(search)
    // eslint-disable-next-line
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
