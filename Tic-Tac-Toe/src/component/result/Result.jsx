import "./Result.scss";
const Result = (prop) => {
  let arr = [
    { name: prop.playersInfo[0].name, result: prop.playersResult[0] },
    { name: prop.playersInfo[1].name, result: prop.playersResult[1] },
  ];
  return (
    <>
      <div className="resultcontainer">
        {arr.map((player, index) => (
          <p
            key={index}
            style={{
              textTransform: "uppercase",
              color: index === 0 ? "red" : "blue",
            }}
          >
            {player.name}: {player.result}
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
