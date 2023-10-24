import { useState } from "react";
import "./Cell.scss";
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
    </>
  );
};

export default Cell;
