import { useEffect, useState } from 'react'
import './styles/App.css'
import Game from './Game.jsx'
import Menu from './Menu.jsx'
import Result from './Result.jsx'
import './styles/font.css'
import fetchCardData from './fetchCardData'
import MusicPlayer from './MusicPlayer.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'

const states = {
  menu: 'menu',
  game: 'game',
  result: 'result'
};

function App() {
  const [gameState, setGameState] = useState(states.menu);
  const [gameResult, setGameResult] = useState(null);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    async function loadCardData() {
      const data = await fetchCardData();
      setCardData(data);
    }
    loadCardData();
  },[])

  function handleGameEnd(result) {
    setGameResult(result);
    setGameState(states.result);
  }

  function handleBackToMenu() {
    setGameResult(null);
    setGameState(states.menu);
  }

  return (
    <>
    <AnimatedBackground/>
    <header>
      <button className='home' onClick={handleBackToMenu}>Home</button>
      <MusicPlayer />
      </header>
    
      <main>
        {gameState == states.menu &&
          <Menu handleStart={() => setGameState(states.game)}/>}
        {gameState == states.game && cardData &&
          <Game cardData={cardData} gameEnd={handleGameEnd}/> }
        {gameState == states.result &&
          <Result state={gameResult} menu={() => handleBackToMenu()}/>}
        {gameState == states.game && !cardData && <p>Loading...</p>}
      </main>
    </>
  )
}

export default App
