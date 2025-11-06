import "./styles/Card.css"

function Card({src, name, handleClick}) {
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={src} />
            <p>{name}</p>
        </div>
    )
}
export default Card;