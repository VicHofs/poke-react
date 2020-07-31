import React from "react";
import "./Dropdown.css";

export default function Dropdown(props) {

    const search = (lang) => {
        if (lang === 'en' && noDefault) {
            noDefault = false;
            return true;
        }
    }
    let flavorTexts = props.data;
    let noDefault = true;
    console.log('dropdown got: ', flavorTexts);
    return(
        <select className="listDrop" onChange={props.onChange}>
            {flavorTexts.map((entry) => <option className="listElement" value={`${entry.language.name}—${entry.version.name}`} key={`${entry.language.name}—${entry.version.name}`} selected={() => search(entry.language.name)}>{entry.language.name} — {entry.version.name}</option>)}
        </select>
    );
}