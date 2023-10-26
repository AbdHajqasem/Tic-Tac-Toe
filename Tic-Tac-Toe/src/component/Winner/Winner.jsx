import { useEffect, useState } from "react";
import "./Winner.scss";
const Winner = (prop) => {
  const [flag, setFlag] = useState(false);
  const resetGame = () => {
    const updatedCellsValue = prop.cellsValue.map(() => "");
    if (prop.tieResult != undefined) {
      prop.setTieResult(prop.tieResult + 1);
    } else {
      const updatedResult = prop.result.map((element, index) => {
        if (prop.winnerName == prop.playersInfo[index].name) {
          return element + 1;
        } else {
          return element;
        }
      });
      prop.setResult(updatedResult);
    }
    prop.setCellsValue(updatedCellsValue);
    prop.winCells([]);
  };
  useEffect(() => {
    if (
      prop.winnerName == prop.playersInfo[0].name ||
      prop.winnerName == prop.playersInfo[1].name
    ) {
      setTimeout(() => {
        setFlag(true);
      }, 2000);
    } else {
      setFlag(true);
    }
  }, []);
  if (!flag) {
    return <></>;
  }

  return (
    <>
      <div className="background">
        <div className="winnercontainer">
          <p>{prop.winnerIs}</p>
          <h2
            className="winnername"
            style={{
              fontSize: "1.5em",
              textTransform: "uppercase",
              color:
                prop.winnerName === prop.playersInfo[0].name
                  ? "red"
                  : prop.winnerName === "Tie"
                  ? "green"
                  : "blue",
            }}
          >
            {prop.winnerName}
          </h2>
          <button className="reset" onClick={resetGame}>
            <i className="fa-solid fa-rotate-right" id="reset"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Winner;
