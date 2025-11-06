import "./styles/BackCardChooser.css"

function BackCardChooser({selected, onSelect}) {
    const backs = Array.from({length: 28}, (_,i) => `/img/back/${i+1}.png`);

    return (
        <div className={`back-card-chooser`}>
            {backs.map((src, idx) => (
                <img key={src} src={src} alt={`Back ${idx+1}`}
                className={`back ${selected === src ? "selected" : ""}`} 
                onClick={() => onSelect(src)}
                style={{border: selected === src ? "2px solid gold" : "2px solid transparent"}}/>
            ))}
        </div>
    )
}

export default BackCardChooser;