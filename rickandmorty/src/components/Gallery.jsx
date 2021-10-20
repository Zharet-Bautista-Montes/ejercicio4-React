import React, { useState, useEffect } from 'react';
import Card from './Card';

export function Gallery(){

    const url = 'https://rickandmortyapi.com/api/character'
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchCardsData(){
            const resp = await fetch(url);
            const data = await resp.json();
            setCards(data.results)
        }
        fetchCardsData();
    }, [])

    return (
        <div className='container'>
            {cards?.map((char) => (
                <Card key = {char.id} character = {char}/>
            ))}
        </div>
    );
}