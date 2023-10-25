import "./TicTacToeBoard.scss";
import Cell from "../Cell/Cell";
import { useState } from "react";
const TicTacToeBoard = (prop) => {
  const [playerName, setplayerName] = useState(prop.playersInfo[0].name);
  const [player1Result, setPlaye1Result] = useState(0);
  const [player2Result, setPlayer2Result] = useState(0);
  const [tieResult, setTieResult] = useState(0);
  return (
    <>
      <div>
        <h2 style={{ fontSize: "1.5em", textTransform: "uppercase" }}>
          Its{" "}
          <span
            style={{
              fontSize: "1.1em",
              color: playerName === prop.playersInfo[0].name ? "red" : "blue",
            }}
          >
            {playerName}
          </span>{" "}
          turn
        </h2>
      </div>
      <div className="board">
        <Cell
          playerName={playerName}
          setplayerName={setplayerName}
          playersInfo={prop.playersInfo}
          player1Result={player1Result}
          setPlaye1Result={setPlaye1Result}
          player2Result={player2Result}
          setPlayer2Result={setPlayer2Result}
          tieResult={tieResult}
          setTieResult={setTieResult}
        />
      </div>
    </>
  );
};
export default TicTacToeBoard;
