import { useEffect, useState } from 'react'
import './styles/App.css'
import Game from './Game.jsx'
import Menu from './Menu.jsx'
import './styles/font.css'
import fetchCardData from './fetchCardData'

const states = {
  menu: 'menu',
  game: 'game'
};

function App() {
  const [gameState, setGameState] = useState(states.menu);
  const [music, setMusic] = useState(false);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    async function loadCardData() {
      const data = await fetchCardData();
      setCardData(data);
    }
    loadCardData();
  },[])

  return (
    <>
    <button className='home'>Home</button>
    <button className='music'>Music</button>
      {gameState == states.menu ? 
      <Menu handleStart={() => setGameState('game')}/>
      :
      cardData ? <Game cardData={cardData}/> : <p>Loading...</p>
      }
    </>
  )
}

export default App
