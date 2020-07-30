import React, {useState, useEffect} from 'react';
import './DropdownMenu.css'

export default function DropDownMenu(props) {
    let {dataOfPokemons} = props;
    const [menuOptions, setMenuOptions] = useState({ results: [] });

    useEffect(() => {
        const fetchResults = dataOfPokemons.map(res => ({
            language : res.language.name,
            version: res.version.name
        }));
        setMenuOptions({fetchResults});
    }, []);

    return(
        <select>
            {dataOfPokemons.results.map(item => (
                <option>{item.language.name} — {item.version.name} </option>
            ))}
        </select>
    )
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