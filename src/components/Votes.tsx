import { useState } from "react";
import "./Votes.css";

function Votes() {
  const [voteCountCH, setVoteCountCH] = useState(0);
  const [voteCountSB, setVoteCountSB] = useState(0);
  const [voteCountVN, setVoteCountVN] = useState(0);
  let voteUpCH = () => {
    setVoteCountCH(voteCountCH + 1);
  };
  let voteUpSB = () => {
    setVoteCountSB(voteCountSB + 1);
  };
  let voteUpVN = () => {
    setVoteCountVN(voteCountVN + 1);
  };
  let totalVotes = voteCountCH + voteCountSB + voteCountVN;

  let votesCH = ((voteCountCH / totalVotes) * 100).toFixed(1);
  let votesSB = ((voteCountSB / totalVotes) * 100).toFixed(1);
  let votesVN = ((voteCountVN / totalVotes) * 100).toFixed(1);

  let showResultsCH = voteCountCH >= 1;
  let showResultsSB = voteCountSB >= 1;
  let showResultsVN = voteCountVN >= 1;
  return (
    <>
      <h1>Vote Here</h1>
      <div>
        <button onClick={() => voteUpCH()}>Chocolate</button>
        <button onClick={() => voteUpSB()}>Strawberry</button>
        <button onClick={() => voteUpVN()}>Vanilla</button>
      </div>
      {showResultsCH ? (
        <>
          {" "}
          <div>
            Cookie Dough: {voteCountCH} ({votesCH}%)
          </div>
          <div
            className={"cd-bar"}
            style={{
              width: votesCH + "%",
              height: "20px",
              backgroundColor: "purple",
            }}
          ></div>
        </>
      ) : null}
      {showResultsSB ? (
        <>
          {" "}
          <div>
            Strawberry: {voteCountSB} ({votesSB}%)
          </div>
          <div
            className="mt-bar"
            style={{
              width: votesSB + "%",
              height: "20px",
              backgroundColor: "green",
            }}
          ></div>
        </>
      ) : null}
      {showResultsVN ? (
        <>
          {" "}
          <div>
            Rocky Road: {voteCountVN} ({votesVN}%)
          </div>
          <div
            className="rr-bar"
            style={{
              width: votesVN + "%",
              height: "20px",
              backgroundColor: "brown",
            }}
          ></div>
        </>
      ) : null}
    </>
  );
}
export default Votes;