import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeSlot from "../Components/TimeSlot";
import Modal from "../Components/ModalComponent";
import "../Css/Home.css";
import BsContext from "../Context/BsContext";
import { useContext } from "react";

const Home = (props) => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

 //Check if any seats have a negative value.
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //Check if all seats have input 0.
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  //validating the user choices and then creating a post request to save the booking information
  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select  a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } else {
      //Validation Successful
      handlePostBooking();
    }
  };

  return (
    <>
      <Modal />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovie />
            </div>
            <div className="last_booking_details_container">
              <LastBookingDetails />
            </div>
          </div>
          <div className="time_seats_container">
            {/* <TimeShedule /> */}
            <TimeSlot/>
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
