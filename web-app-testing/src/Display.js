import React from 'react';


const Display = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Baseball Scoreboard</h1>
            <h3>Player at Bat:</h3>
            <p>Balls: {props.ballCount}</p>
            <p>Strikes: {props.strikeCount}</p>
        </div>
    )
}

export default Display;

//DISPLAY the count of balls and strikes...updated when user records activity on dashboard