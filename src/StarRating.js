import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
  //   const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];

  const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          //   onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
