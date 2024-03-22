import React, { useEffect } from "react";
import "../Css/LastBookingDetails.css";
import { useContext } from "react";
import BsContext from "../Context/BsContext";
import { seats } from "../data";


// The LastBookingDetails component is used to provide info. about the user last successful booking. 
// It uses the context handleGetLastBooking func to acquire the recent booking info. from the backend API. 
// If there are no previous booking details a notice have to be appear. Otherwise, the movie, slot, and quantity of seats reserved for each seat are shown.
const LastBookingDetails = (props) => {
  const context = useContext(BsContext);

  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {
    // handleGetLastBooking function when the component mounts, and the empty dependency arr ensure that the effect is not repeated on the subsequent rendeings. This ensures that the last booking info. is only obtained once, when the component is mounted.
    handleGetLastBooking(); 
  }); //This line closes the useEffect hook. The empty array [] ensures that the effect only runs once (on mount).

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat_value" key={index}>
                    {seat}: {Number(lastBookingDetails.seats[seat])}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;




