import "./EnterPlayerName.scss";
import TicTacToeBoard from "../Tic_tac_toe_board/TicTacToeBoard";
import { useState, useRef } from "react";
const EnterPlayerName = () => {
  const [playersInfo, setPlayersInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const playerName = useRef(null);
  const savePlayerInfo = (event) => {
    event.preventDefault();
    if (!playerName.current.value) {
      setErrorMessage("Enter your name");
    } else if (
      playersInfo.length == 1 &&
      playerName.current.value == playersInfo[0].name
    ) {
      setErrorMessage("The name is taken by the first player");
    } else {
      const newPlayerInfo = {
        id: playersInfo.length + 1,
        name: playerName.current.value,
      };
      setPlayersInfo([...playersInfo, newPlayerInfo]);
      setErrorMessage("");
      playerName.current.value = "";
    }
  };
  return (
    <>
      {playersInfo.length < 2 && (
        <form onSubmit={savePlayerInfo}>
          <div className="playersnamecontainer">
            <h2>Player {playersInfo.length + 1}</h2>
            <input
              type="text"
              className="playername"
              ref={playerName}
              placeholder="Enter your name"
            />
            <div className="errorcontainer">
              {errorMessage && <span className="error">{errorMessage}</span>}
            </div>

            <input
              type="submit"
              value="Save"
              className={
                playersInfo.length === 0 ? "savebtnred" : "savebtnblue"
              }
            />
          </div>
        </form>
      )}
      {playersInfo.length == 2 && <TicTacToeBoard playersInfo={playersInfo} />}
    </>
  );
};
export default EnterPlayerName;
