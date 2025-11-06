import "./styles/Card.css"

function Card({src, name, handleClick, flipped, backSrc}) {


    return (
        <div className={`card-3d-container${flipped ? " flipped" : ""}`} onClick={handleClick}>
            <div className="card">
                <div className="card-3d">
                    <div className="card-face card-front">
                        <img src={src} alt=""/>
                        <p>{name}</p>
                    </div>
                    <div className="card-face card-back">
                        <img src={backSrc} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;