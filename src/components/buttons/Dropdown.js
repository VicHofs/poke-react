import React from "react";
import "./Dropdown.css";


export default function Dropdown(data) {
    let flavorTexts = data.data;
    console.log('dropdown got: ', flavorTexts);
    return(
        <select className="listDrop">
            {flavorTexts.map((entry) => <option>`${entry.language.name} — ${entry.version.name}`</option>)}
        </select>
    );
}