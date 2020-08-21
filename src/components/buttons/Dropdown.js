import React from "react";
import "./Dropdown.css";

export default function Dropdown(props) {
    let flavorTexts = props.data;
    let targetVer = 'alpha_sapphire';
    for (let entry of flavorTexts) {
        if (entry.language.name === 'en') {
            targetVer = entry.version.name;
            break;
        }
    }
    
    return(
        <select className="listDrop" onChange={props.onChange}>
            {flavorTexts.map((entry) => <option className="listElement" value={`${entry.language.name}—${entry.version.name}`} key={`${entry.language.name}—${entry.version.name}`} selected={entry.language.name === 'en' && entry.version.name === targetVer}>{entry.language.name} — {entry.version.name}</option>)}
        </select>
    );
}