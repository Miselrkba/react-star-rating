import "./App.css";
import StarRating from "./StarRating";
import colorData from "./color-data.json";
import React, { useState } from "react";
import ColorList from "./ColorList";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      {/* <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      /> */}
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
