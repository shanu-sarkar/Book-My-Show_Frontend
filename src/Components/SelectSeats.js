import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../Css/SelectSeats.css";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  // Using the useState hook this line assigns the state variable seat to an empty Arr. this variable is used to save the selected seat.
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select thee seats</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
