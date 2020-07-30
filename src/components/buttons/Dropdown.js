import React from "react";
import "./Dropdown.css";


export default function TranslateButtons() {

    return(
        <select className="listDrop">
            <option className="listElement">PT-BR</option>
            <option className="listElement">EN-US</option>
        </select>
    );
}