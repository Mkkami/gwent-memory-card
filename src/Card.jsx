import "./styles/Card.css"

function Card({src, name, handleClick, flipped}) {


    return (
        <div className={`card-3d-container${flipped ? " flipped" : ""}`} onClick={handleClick}>
            <div className="card">
                <div className="card-3d">
                    <div className="card-face card-front">
                        <img src={src} alt={name} />
                        <p>{name}</p>
                    </div>
                    <div className="card-face card-back">
                        <img src="/img/back.png" alt="Card back" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;