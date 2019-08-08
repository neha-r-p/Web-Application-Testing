import React from 'react';


const Display = (props) => {
    console.log(props)
    return (
        <div>
            <p>Balls: {props.ballCount}</p>
            <p>Strikes: {props.strikeCount}</p>
        </div>
    )
}

export default Display;

//DISPLAY the count of balls and strikes...updated when user records activity on dashboard