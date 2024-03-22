import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../Css/SelectMovie.css";

const SelectMovie = () => {
  const context = useContext(BsContext);

  //It indicates that the movie and changeMovie variable are being destructured from the context object .
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    //handleChangeMovie function sets the selected movie value in the localStorage object using the setItem method.
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select A Movie</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
