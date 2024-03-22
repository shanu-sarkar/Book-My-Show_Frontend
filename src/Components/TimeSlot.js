import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import "../Css/TimeSlot.css";
import BsContext from "../Context/BsContext";

const TimeSlot = () => {
  const context = useContext(BsContext);

  // This shows the time and changeTime variables are being destructed from context obj .
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    //shows the handleChangeTime func is setting the selected slot value in the localStorage obj using the setItem method.
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Time Slot</h1>
        <div className="TS_main_container">
{/* This RadioComponent with the text prop set to the current slot, 
the changeSelection prop set to the handleChangeTime func, the data prop 
set the time state variable, and the key set to the current index. */}
          {slots.map((el, index) => {
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
