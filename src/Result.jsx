
function Result({state, menu}) {

    return (
        <div className="result">
            {state == 'win' ?
            <p>You win!</p>
            :
            <p>You lose!</p>
            }
            <button onClick={menu}>Menu</button>
        </div>
    )
}

export default Result;