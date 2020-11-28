import React, { useRef } from "react";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const txtTitle = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    null;
  };
  return (
    <div>
      <h1>form</h1>
    </div>
  );
};

export default AddColorForm;
