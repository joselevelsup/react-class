import React from "react";
import "./card.css";

export default function Card(props){
    return (
        <div className="card">
            <h3>{props.cardtitle}</h3>
            <p>{props.carddesc}</p>
        </div>
    );
}