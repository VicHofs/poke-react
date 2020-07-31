import React from "react";
import "./Dropdown.css";

export default function Dropdown(props) {
    let flavorTexts = props.data;
    console.log('dropdown got: ', flavorTexts);
    return(
        <select className="listDrop" onChange={props.onChange}>
            {flavorTexts.map((entry) => <option className="listElement" value={`${entry.language.name}—${entry.version.name}`} key={`${entry.language.name}—${entry.version.name}`} selected={entry.language.name === 'en' && entry.version.name === 'alpha-sapphire'}>{entry.language.name} — {entry.version.name}</option>)}
        </select>
    );
}