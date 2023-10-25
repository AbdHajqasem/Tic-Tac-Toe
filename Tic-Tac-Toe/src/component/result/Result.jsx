import "./Result.scss";
const Result = (prop) => {
  return (
    <>
      <div className="resultcontainer">
        <p
          style={{
            textTransform: "uppercase",
            color: "red",
          }}
        >
          {prop.playersInfo[0].name}: {prop.player1Result}
        </p>
        <p
          style={{
            textTransform: "uppercase",
            color: "blue",
          }}
        >
          {prop.playersInfo[1].name}: {prop.player2Result}
        </p>
        <p
          style={{
            textTransform: "uppercase",
            color: "green",
          }}
        >
          Tie: {prop.tieResult}
        </p>
      </div>
    </>
  );
};
export default Result;
