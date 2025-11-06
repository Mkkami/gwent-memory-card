import { useEffect, useState } from "react";
import fetchCardData from "./fetchCardData";

function Game() {
    const SIZE = 1381; //max id is 1380
    const NUM_OF_CARDS = 5;

    useEffect(() => {
        fetchCardData();
    }, [])
    
    // console.log(cardData);
    
    const [cards, setCards] = useState([]);

    return (
        <div>
            {cards.map(c => {
                <Card name={c.name} src={c.src}/>
            })}
        </div>
    )
}

export default Game;

function getRandomUnique(num, size) {
    const unique = new Set();
    while (unique.size < num) {
        unique.add(Math.floor(Math.random) * size)
    }
    return unique;
}