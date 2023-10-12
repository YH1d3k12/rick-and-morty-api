import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.css"


export default function Header() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <h1><a onClick={() => navigate("/")}>Rick and Morty API</a></h1>
            <h2>Characters</h2>
        </header>
    );
};