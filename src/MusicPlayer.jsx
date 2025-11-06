import { useState, useEffect, useRef } from "react";
import './styles/MusicPlayer.css'

function MusicPlayer() {
    const audioRef = useRef(null);
    const [music, setMusic] = useState(false);

    useEffect(() => {
        if (!audioRef.current) return;
        if (music) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [music]);

    return (
    <>
        <button className='music'
            onClick={() => setMusic(m => !m)}>
            {music ? "Pause" : "Play"}
        </button>
        <audio ref={audioRef} loop hidden>
            <source src="/sound/The-Nightingale.mp3" type="audio/mpeg" />
        </audio>
    </>
    );
}

export default MusicPlayer;