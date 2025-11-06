import { useEffect, useState } from "react";
import fetchCardData from "./fetchCardData";
import fetchImageData from "./fetchImageData";
import Card from "./Card";
import './styles/Game.css'

function Game({cardData}) {
    const SIZE = 1381; //max id is 1380
    const NUM_OF_CARDS = 5;

    const [gameCards, setGameCards] = useState([]);

    console.log(gameCards);

    useEffect(() => {
        async function loadGameCards() {
            
            let randomIds = getRandomUnique(NUM_OF_CARDS, SIZE);
            randomIds = [0, 1, 2, 3, 4]; // testing

            const cards = await Promise.all(
                randomIds.map(async id => {
                    const {name, art} = cardData[id];
                    const src = await fetchImageData(art);
                    return {name, src};
                })
            );

            setGameCards(cards);
        }
        loadGameCards();
    }, [])

    

    return (
        <div className="game">
            {gameCards.map(c => 
                <Card key={c.name} name={c.name} src={c.src} handleClick={ () => setGameCards(shuffleArray(gameCards))}/>
            )}
        </div>
    )
}

export default Game;

function getRandomUnique(num, size) {
    const unique = new Set();
    while (unique.size < num) {
        unique.add(Math.floor(Math.random() * size))
    }
    return [...unique];
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}