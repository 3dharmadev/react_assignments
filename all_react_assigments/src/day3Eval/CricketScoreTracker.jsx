import { useState } from "react";
import "./appp.css";

export const CricketScoreTracker = () => {
  const [score, setScore] = useState(76);
  const [wickets, setWickets] = useState(2);
  const [balls, setBalls] = useState(50);

  const increaseScore = (amount) => {
    if (score < 100) {
      setScore(score + amount);
    }
  };

  const increaseWicket = () =>{
    if(score<101 && wickets <12){
      setWickets(wickets+1);
    }
  };

  const increaseBalls = () =>{
    if(score<100){
      setBalls(balls+1);
    }
  }



  return (
    <div>
      <div>
        Score : <h1 className="scoreCount">{score}</h1>
      </div>
      <div>
        Wickets : <h1 className="wicketCount">{wickets}</h1>
      </div>
      <div>
        Balls : <h1 className="overCount">{balls}</h1>
      </div>

      <div className="addScore">
        <button className="addScore1" onClick={() => increaseScore(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => increaseScore(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => increaseScore(6)}>
          Add 6
        </button>
      </div>

     <div className="addWicket">
      <button onClick={increaseWicket}>Add Wicket</button>
     </div>

     <div className="addBall">
      <button onClick={increaseBalls}>Add Ball</button>
     </div>
     {wickets===12 && <h1>India lost</h1>}
      {score>100 && <h1 className="status"> India Won</h1>}
    </div>
  );
};
