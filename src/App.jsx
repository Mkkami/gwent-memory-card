import { useEffect, useState } from 'react'
import './styles/App.css'
import Game from './Game.jsx'
import Menu from './Menu.jsx'
import Result from './Result.jsx'
import './styles/font.css'
import fetchCardData from './fetchCardData'
import MusicPlayer from './MusicPlayer.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import BackCardChooser from './BackCardChooser.jsx'

const states = {
  menu: 'menu',
  game: 'game',
  result: 'result'
};

function App() {
  const [gameState, setGameState] = useState(states.menu);
  const [gameResult, setGameResult] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [backSrc, setBackSrc] = useState("/img/back/1.png");
  const [showBackChooser, setShowBackChooser] = useState(false);

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
    setShowBackChooser(false);
  }

  return (
    <>
    <AnimatedBackground/>
    <header>
      <button className='home' onClick={handleBackToMenu}>Home</button>
      <MusicPlayer />
      </header>
    
      <main>
        {showBackChooser && (
        <div>
          <button className="close" onClick={() => setShowBackChooser(false)}>Close</button>
          <BackCardChooser selected={backSrc} onSelect={setBackSrc}/>
        </div>
        )
        }
        {gameState == states.menu && !showBackChooser &&
        <>
          <Menu handleStart={() => setGameState(states.game)}/>
          <button onClick={() => setShowBackChooser(true)}>Choose back card design</button>
        </>}
        {gameState == states.game && cardData && !showBackChooser &&
          <Game cardData={cardData} backSrc={backSrc} gameEnd={handleGameEnd}/> }
        {gameState == states.result && !showBackChooser &&
          <Result state={gameResult} menu={() => handleBackToMenu()}/>}
        {gameState == states.game && !cardData && !showBackChooser &&<p>Loading...</p>}
      </main>
    </>
  )
}

export default App
