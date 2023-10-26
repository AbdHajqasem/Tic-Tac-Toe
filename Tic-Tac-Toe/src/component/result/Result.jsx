import "./Result.scss";
const Result = (prop) => {
  return (
    <>
      <div className="resultcontainer">
        {prop.playersInfo.map((player, index) => (
          <p
            key={index}
            style={{
              textTransform: "uppercase",
              color: index === 0 ? "red" : "blue",
            }}
          >
            {player.name}:{" "}
            {index === 0 ? prop.playersResult[0] : prop.playersResult[1]}
          </p>
        ))}

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
