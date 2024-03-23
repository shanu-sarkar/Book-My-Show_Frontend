import React, { useState, useEffect } from "react";
import BsContext from "./BsContext";

// This is a React functional component called BsState maintains the state of a movie booking application. It use the useState hook to handle multiple state variables and the useState hook to handle multipe state variables and the useEffect hook to execute side effects.
const BsState = (props) => {
  //error popup
  const [errorPopup, setErrorPopup] = useState(false);

  //error message
  const [errorMessage, setErrorMessage] = useState("");

  // time slots that the user selects.
  const [time, changeTime] = useState("");

  // Movie that user selects.
  const [movie, changeMovie] = useState("");

  // No of seats that user selects.
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    D1: "",
    D2: "",
    D3: "",
  });
// This line uses the useState hook to set the state variable lastBookingDetails to null. This variable is used to the successful booking.
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  // handling post request to save booking details on the backend
  const handlePostBooking = async () => {
    // Sending api request to backend with user selected movie, slot and seats to book movie.
    const response = await fetch(
      // `https://book-my-show-backend-fh9v.vercel.app/api/booking`,
      `http://localhost:8080/api/booking
      `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
      }
    );

    const data = await response.json();

    //showing message from backend on Popup to user whether success or error.
    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 200) {
      //Reset the state to success
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        D1: "",
        D2: "",
        D3: "",
      });
      setLastBookingDetails(data.data);

      //Clearing the local storage when booking is successful
      window.localStorage.clear();
    }
  };

  //This func sends a GET req to the backend to retrieve the details of the most recent successful booking. It updates the last lastBookingDetails state variable with the answer data.
  const handleGetLastBooking = async () => {
    const response = await fetch(
      // `https://book-my-show-backend-fh9v.vercel.app/api/booking`
      `http://localhost:8080/api/booking`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    setLastBookingDetails(data.data);
  };

  useEffect(() => {
    //useEffect hook runs when the component is mounted. It retrieves the movie, slot, and seats from local storage and updates the state variable with their values.
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if(movie){
      changeMovie(movie);
    }
    if(slot){
      changeTime(slot);
    }
    if(seats){
      changeNoOfSeats(seats);
    }
  });

  return (
    // provide all the required data to app.
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}>
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;

// The Whole , component handle the movie booking application's state and passes the necessary 
// data and functionalities to the child components via the BsContext context.



