import React, {useState} from 'react';
import './DropdownMenu.css'

export default function DropdownMenu(obj) {
    let {data} = obj;
    const [showMenu, setShowMenu] = useState(false);

    const isMenuVisible = () =>{console.log("hello")
        showMenu ? hideOptions() : showOptions();
    }

    const hideOptions = () =>{
        setShowMenu(false);
        document.getElementsByClassName("dropdown-content")[0]
            .innerHTML= ""
    }

    const showOptions = () =>{
        setShowMenu(true)
        //console.log(data.arrayText)
        const map = data.arrayText.map( text => 
            `<button className="option">${text.language.name} -- ${text.version.name}</button>`
                
            )
         document.getElementsByClassName("dropdown-content")[0]
            .innerHTML= map.toString().replace(/,/g, "")
        }

    return (
        <div className="dropdown_menu">
            <button onClick={isMenuVisible} className="dropbtn">
                language -- version 
            </button>
            <div className="dropdown-content">
                
            </div>
        </div>
    )
}