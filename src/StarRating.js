import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) => {
  //   const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];
  //modify the component to contain an onSelect Property
  //this property is a function which can notify its parent 
  const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
