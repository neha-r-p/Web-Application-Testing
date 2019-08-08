import React from 'react';
import Display from './Display'

const Dashboard = () => {
    return (
        <div>
            <Display />

            <div className="dashboard-btns">
                <button className="strike-btn">Strike</button>
                <button className="ball-btn">Ball</button>
                <button className="foul-btn">Foul</button>
                <button className="hit-btn">Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;


/* 
-Provide buttons: Strike, Ball, Foul, Hit
-Update the info on Display
-Count Rules:
    -Balls and Strikes reset to 0 when a 'hit' is recorded
    -'Foul' increases strikes up to 2, then stays at 2
    -Balls and Strikes reset to 0 when a player reaches 3 strikes or 4 balls

*/