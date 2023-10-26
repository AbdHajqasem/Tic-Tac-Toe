import { useState } from "react";
import "./Cell.scss";
import Winner from "../Winner/Winner";
const Cell = (prop) => {
  const [cellsValue, setCellsValue] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [winCells, setWinCells] = useState([]);
  let flag = false;
  if (winCells.length > 0) {
    flag = true;
  }
  const putMarkOnPlayerChoice = (cellNum) => {
    cellsValue.forEach((cellValue, index) => {
      if (
        prop.playerName === prop.playersInfo[0].name &&
        cellNum === index + 1 &&
        !cellValue
      ) {
        cellsValue[index] = "x";
        prop.setplayerName(prop.playersInfo[1].name);
      } else {
        if (!cellValue && cellNum === index + 1) {
          cellsValue[index] = "o";
          prop.setplayerName(prop.playersInfo[0].name);
        }
      }
    });
    setCellsValue(cellsValue);
  };
  return (
    <>
      {cellsValue.map((cellValue, index) => (
        <div key={index} className="cell">
          <input
            className={winCells.includes(index) ? "wincells" : ""}
            type="button"
            onClick={() => {
              putMarkOnPlayerChoice(index + 1);
            }}
            value={cellValue}
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: cellValue === "x" ? "red" : "blue",
            }}
          />
        </div>
      ))}
      {((cellsValue[0] == "x" &&
        cellsValue[1] == "x" &&
        cellsValue[2] == "x" &&
        (flag || setWinCells([0, 1, 2]))) ||
        (cellsValue[3] == "x" &&
          cellsValue[4] == "x" &&
          cellsValue[5] == "x" &&
          (flag || setWinCells([3, 4, 5]))) ||
        (cellsValue[6] == "x" &&
          cellsValue[7] == "x" &&
          cellsValue[8] == "x" &&
          (flag || setWinCells([6, 7, 8]))) ||
        (cellsValue[0] == "x" &&
          cellsValue[3] == "x" &&
          cellsValue[6] == "x" &&
          (flag || setWinCells([0, 3, 6]))) ||
        (cellsValue[1] == "x" &&
          cellsValue[4] == "x" &&
          cellsValue[7] == "x" &&
          (flag || setWinCells([1, 4, 7]))) ||
        (cellsValue[2] == "x" &&
          cellsValue[5] == "x" &&
          cellsValue[8] == "x" &&
          (flag || setWinCells([2, 5, 8]))) ||
        (cellsValue[0] == "x" &&
          cellsValue[4] == "x" &&
          cellsValue[8] == "x" &&
          (flag || setWinCells([0, 4, 8]))) ||
        (cellsValue[2] == "x" &&
          cellsValue[4] == "x" &&
          cellsValue[6] == "x" &&
          (flag || setWinCells([2, 4, 6])))) && (
        <Winner
          winnerName={prop.playersInfo[0].name}
          winnerIs={"Winner is:"}
          cellsValue={cellsValue}
          setCellsValue={setCellsValue}
          result={prop.playersResult}
          setResult={prop.setPlayersResult}
          playersInfo={prop.playersInfo}
          winCells={setWinCells}
        />
      )}
      {((cellsValue[0] == "o" &&
        cellsValue[1] == "o" &&
        cellsValue[2] == "o" &&
        (flag || setWinCells([0, 1, 2]))) ||
        (cellsValue[3] == "o" &&
          cellsValue[4] == "o" &&
          cellsValue[5] == "o" &&
          (flag || setWinCells([3, 4, 5]))) ||
        (cellsValue[6] == "o" &&
          cellsValue[7] == "o" &&
          cellsValue[8] == "o" &&
          (flag || setWinCells([6, 7, 8]))) ||
        (cellsValue[0] == "o" &&
          cellsValue[3] == "o" &&
          cellsValue[6] == "o" &&
          (flag || setWinCells([0, 3, 6]))) ||
        (cellsValue[1] == "o" &&
          cellsValue[4] == "o" &&
          cellsValue[7] == "o" &&
          (flag || setWinCells([1, 4, 7]))) ||
        (cellsValue[2] == "o" &&
          cellsValue[5] == "o" &&
          cellsValue[8] == "o" &&
          (flag || setWinCells([2, 5, 8]))) ||
        (cellsValue[0] == "o" &&
          cellsValue[4] == "o" &&
          cellsValue[8] == "o" &&
          (flag || setWinCells([0, 4, 8]))) ||
        (cellsValue[2] == "o" &&
          cellsValue[4] == "o" &&
          cellsValue[6] == "o" &&
          (flag || setWinCells([2, 4, 6])))) && (
        <Winner
          winnerName={prop.playersInfo[1].name}
          winnerIs={"Winner is:"}
          cellsValue={cellsValue}
          setCellsValue={setCellsValue}
          result={prop.playersResult}
          setResult={prop.setPlayersResult}
          playersInfo={prop.playersInfo}
          winCells={setWinCells}
        />
      )}
      {cellsValue[0] &&
        cellsValue[1] &&
        cellsValue[2] &&
        cellsValue[3] &&
        cellsValue[4] &&
        cellsValue[5] &&
        cellsValue[6] &&
        cellsValue[7] &&
        cellsValue[8] &&
        winCells.length == 0 && (
          <Winner
            winnerName={"Tie"}
            cellsValue={cellsValue}
            setCellsValue={setCellsValue}
            tieResult={prop.tieResult}
            setTieResult={prop.setTieResult}
            playersInfo={prop.playersInfo}
            winCells={setWinCells}
          />
        )}
    </>
  );
};

export default Cell;
