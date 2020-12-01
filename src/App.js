import "./App.css";
// import StarRating from "./StarRating";
import colorData from "./color-data.json";
import React, { useState } from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import uuid from "react-uuid";

function App() {
  // const [colors, setColors] = useState(colorData);

  return (
    <div className="App">
      <AddColorForm
        // onNewColor={(title, color) => {
        //   const newColors = [
        //     ...colors,
        //     {
        //       id: uuid(),
        //       rating: 0,
        //       title,
        //       color,
        //     },
        //   ];
        //   setColors(newColors);
        // }}
      />
      <ColorList
        // colors={colors}
        // onRemoveColor={(id) => {
        //   const newColors = colors.filter((color) => color.id !== id);
        //   setColors(newColors);
        // }}
      />
    </div>
  );
}

export default App;
