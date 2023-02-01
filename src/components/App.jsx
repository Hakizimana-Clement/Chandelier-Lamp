import React, { useState } from "react";
import "./App.css";
import bubleOff from "./img/bubble-off.png";
import bubleOn from "./img/bubble-on.png";

const imgOff = <img src={bubleOff} alt="bubbleOff.png" />;
const imgOn = <img src={bubleOn} alt="bubbleOn.png" />;

export default function App() {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    console.log("clicked");
    setIsDone((prevValue) => !prevValue);
  }
  return (
    <div className="container">
      <h1>Chandelier Lamp</h1>
      {isDone ? imgOn : imgOff}
      <button
        style={
          isDone
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "white" }
        }
        onClick={handleClick}
      >
        {isDone ? "ON" : "OFF"}
      </button>
    </div>
  );
}
