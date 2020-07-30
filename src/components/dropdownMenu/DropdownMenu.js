import React, {useState} from 'react';
import './DropdownMenu.css'

export default function DropDownMenu() {
    const [menuOptions, setMenuOptions] = useState = ({ results: [] });


    const getDescription = (json) => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${json.name}`)
            .then(res => res.json())
            .then(res => {
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
        .then(json => {
            setData({
                id: json.id,
                name: json.name,
                image: json.sprites.front_default
            });
            getDescription(json)
        })
        .catch(err => console.log(err));
    }
}

// export default function DropdownMenu(obj) {
//     let {data} = obj;
//     const [showMenu, setShowMenu] = useState(false);

//     // const isMenuVisible = () =>{console.log("hello")
//     //     showMenu ? hideOptions() : ShowOptions();
//     // }

//     // const hideOptions = () =>{
//     //     setShowMenu(false);
//     //     document.getElementsByClassName("dropdown-content")[0]
//     //         .innerHTML= ""
//     // }

//     const ShowOptions = () =>{
//         setShowMenu(true)
//         //console.log(data.arrayText)
//         const map = data.arrayText.map( text => 
//             `<button className="option">${text.language.name} -- ${text.version.name}</button>`
                
//             )
//         //  document.getElementsByClassName("dropdown-content")[0]
//         //     .innerHTML= map.toString().replace(/,/g, "")
//         }

//     return (
//         // <div className="dropdown_menu">
//         //     <button onClick={isMenuVisible} className="dropbtn">
//         //         language -- version 
//         //     </button>
//         //     <div className="dropdown-content">
                
//         //     </div>
//         // </div>
//         <select>
//             <option>${text.language.name} -- ${text.version.name} </option>
//         </select>
//     )
// }