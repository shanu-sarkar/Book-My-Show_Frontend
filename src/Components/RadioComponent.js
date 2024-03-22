import React from "react";
import "../Css/RadioComponent.css";

// RadioComponent is used to display a radio button that allows the user to choose a movie or a slot.
const RadioComponent = ({ text, changeSelection, data }) => {
  // handleChecked function updates the data prop based on the user selection.
  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      name={text}
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}>
      <span className={"text"}>{text}</span>
    </div>
  );
};

export default RadioComponent;
