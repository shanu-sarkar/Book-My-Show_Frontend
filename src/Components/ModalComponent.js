import React, { useContext } from "react";
import BsContext from "../Context/BsContext";
import "../Css/ModalComponent.css";

// Modal that accepts two parameters (header and message) this is called with the context showMsg function.
function Modal(props) {
  const context = useContext(BsContext);
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context;

  //setting errorOn closing the modal, set the popup to false and the error message to.
  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };

  return (
    <>
      {errorPopup && (
        <div
          className={`modal-container ${errorPopup ? "active" : "inactive"}`}>
          <div className="modal">
            <div className="modal-header">
              <strong>Message</strong>
            </div>
            <div className="modal-body">
              <span>{errorMessage}</span>
            </div>
            <div className="modal-footer">
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
