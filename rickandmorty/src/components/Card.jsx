import React from 'react';

export default function Card({keyId, character}){
    return (
        <div className="card" key={keyId}>
        <img src={character.image} className="card-img-top" alt="logo" />
            <div className="card-body">
            <h6 className="card-title">{character.name}</h6>
            <ul className="card-text">
                <li>Gender: {character.gender}</li>
                <li>Status: {character.status}</li>
            </ul>
            <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

