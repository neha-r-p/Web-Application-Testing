import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const strikeClickHandler = () => {
    console.log("strike was clicked!");
    if (strikeCount + 1 < 3) {
      setStrikeCount(strikeCount + 1);
    } else {
      setStrikeCount(0);
    }
  };

  const ballClickHandler = () => {
    console.log("ball was clicked!");
    if (ballCount + 1 < 4) {
      setBallCount(ballCount + 1);
    } else {
      setBallCount(0);
    }
  };

  const foulClickHandler = () => {
    console.log("foul was clicked!");
    if (strikeCount + 1 < 2) {
      setStrikeCount(strikeCount + 1);
    } else {
      setStrikeCount(2);
    }
  };

  const hitClickHandler = () => {
    console.log("hit was clicked!");
    setStrikeCount(0);
    setBallCount(0);
  };

  return (
    <div>
      <Display ballCount={ballCount} strikeCount={strikeCount} />

      <div className="dashboard-btns">
        <button className="strike-btn" onClick={strikeClickHandler}>
          Strike
        </button>
        <button className="ball-btn" onClick={ballClickHandler}>
          Ball
        </button>
        <button className="foul-btn" onClick={foulClickHandler}>
          Foul
        </button>
        <button className="hit-btn" onClick={hitClickHandler}>
          Hit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

/* 
-Provide buttons: Strike, Ball, Foul, Hit
-Update the info on Display
-Count Rules:
    -Balls and Strikes reset to 0 when a 'hit' is recorded
    -'Foul' increases strikes up to 2, then stays at 2
    -Balls and Strikes reset to 0 when a player reaches 3 strikes or 4 balls

*/
