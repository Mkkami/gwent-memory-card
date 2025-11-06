import { useEffect, useRef } from "react";

function MusicPlayer({ playing }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [playing]);

    return (
        <audio ref={audioRef} loop hidden>
            <source src="/sound/The-Nightingale.mp3" type="audio/mpeg" />
        </audio>
    );
}

export default MusicPlayer;