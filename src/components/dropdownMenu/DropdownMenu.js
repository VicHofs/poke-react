import React from 'react';
import './DropdownMenu.css'

export default function DropDownMenu(props) {
    let {data} = props;
    console.log(props);

    return(
        <select>
            {data.arrayText.map(item => (
                <option>{item.language.name} -- {item.version.name}</option>
            ))}
        </select>
    )
}
