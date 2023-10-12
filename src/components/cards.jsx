import React, { useState, useEffect } from "react";

import mock from "../data/mock.js";

import "./cards.css"

export default function CharacterCard() {
    const [ content, setContent ] = useState(<h2>Loading...</h2>);

    const characters = mock;

    
    useEffect(() => {
        setContent(mock);
    }, []);

    return (
        <div className="character-card-content-wrapper">
            {characters.map((character) => {
                return (
                    <div key={character.id} className="character-card">
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <div>
                            <p><strong>Specie: </strong>{character.species}</p>
                            <p><strong>Gender: </strong> {character.gender}</p>
                        </div>
                        <h5>Status: {character.status}</h5>
                    </div>
                )
            })}
        </div>
    )
};