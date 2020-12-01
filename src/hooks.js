import { useState } from "react";


export const useInput = (initialValue) => {
  //we’re still using the useState hook to create a state value
  const [value, setValue] = useState(initialValue);
  //return an array
  //The first value of the array is the object that contains values
  // were tempted to copy and paste
  //onChange function property that changes that value in state
  //The second value is a function to reset the value back to initial
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};


