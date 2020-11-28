import "./App.css";
import StarRating from "./StarRating";
import colorData from './color-data.json'
import React, { useState } from "react";

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      />
    </div>
  );
}

export default App;
