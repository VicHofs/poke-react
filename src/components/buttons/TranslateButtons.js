import React from "react";
import "./TranslateButtons.css";


export default function TranslateButtons() {

    return(
        <select className="ListaBotoes">
            <option className="ElementoListaBotoes">PT-BR</option>
            <option className="ElementoListaBotoes">EN-US</option>
        </select>
    );
}