import React from "react";


export default function Dropdown(props) {
    let flavorTexts = props.data;
    let targetVer = 'alpha_sapphire';
    if(flavorTexts)
    for (let entry of flavorTexts) {
        if (entry.language.name === 'en') {
            targetVer = entry.version.name;
            break;
        }
    }
    //console.log('dropdown got: ', flavorTexts);
    return(
        <select className="listDrop" onChange={props.onChange}>
            {flavorTexts && flavorTexts.map((entry) => <option className="listElement" value={`${entry.language.name}—${entry.version.name}`} key={`${entry.language.name}—${entry.version.name}`} selected={entry.language.name === 'en' && entry.version.name === targetVer}>{entry.language.name} — {entry.version.name}</option>)}
        </select>
    );
}