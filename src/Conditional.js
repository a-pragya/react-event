import React from "react"

function Conditional(props){
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick = {() => props.handleClick()}>Increment!</button>
            <button onClick ={ () => props.handleClick2()}>Reset!</button>
        </div>
    )
}

export default Conditional