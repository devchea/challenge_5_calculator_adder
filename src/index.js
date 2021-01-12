import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  console.log("first:", firstNum);
  console.log("sec:", secondNum);

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setFirstNum(e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setSecondNum(e.target.value)}
        />
      </div>

      <button>+</button>
      <button>-</button>
      <button>x</button>
      <button>/</button>

      <h2>0</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
