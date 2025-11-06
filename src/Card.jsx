

function Card({src, name}) {
    
    return (
        <div>
            <img src={src} />
            <p>{name}</p>
        </div>
    )
}
export default Card;