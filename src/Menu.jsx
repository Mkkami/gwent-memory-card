import './styles/Menu.css'
function Menu({handleStart}) {

    return (
        <div className="menu">
            <button onClick={handleStart}>Start game</button>
        </div>
    )
}
export default Menu;