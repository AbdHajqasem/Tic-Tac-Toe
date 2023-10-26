import "./TicTacToeBoard.scss";
import Cell from "../Cell/Cell";
import Result from "../result/Result";
import { useState } from "react";
const TicTacToeBoard = (prop) => {
  const [playerName, setplayerName] = useState(prop.playersInfo[0].name);
  const [playersResult, setPlayersResult] = useState([0, 0]);
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
          playersResult={playersResult}
          setPlayersResult={setPlayersResult}
          tieResult={tieResult}
          setTieResult={setTieResult}
        />
      </div>
      <Result
        playerName={playerName}
        playersInfo={prop.playersInfo}
        playersResult={playersResult}
        setPlayersResult={setPlayersResult}
        tieResult={tieResult}
        setTieResult={setTieResult}
      />
    </>
  );
};
export default TicTacToeBoard;
