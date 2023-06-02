import React, { Fragment, useState } from "react";
import "./booking.css";

const Booking = ({ closeForm, showFrom, show }) => {
  
    // pre Form data
  const [formData, setFormData] = useState({
    movieName: show?.show?.name,
    genres: show?.show?.genres,
    language: show?.show?.language,
    premiered: show?.show?.premiered
  }); 

  // Function to handle form submission and storing details to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
 
    localStorage.setItem("bookingData", JSON.stringify(formData));
    alert("Ticket is booked successfully!");
    console.log(formData);
 
  };

  return (
    <Fragment>
      {showFrom && (
        <div className="showFormModel">
          <div className="formDetails">
            <div className="showFormModelInputs">
              <div className="closeModel">
                <h1>Booking Details</h1>
                <h1 className="closeBtn" onClick={closeForm}>
                  close
                </h1>
              </div>
              <form className="showFormModelInputs" onSubmit={handleSubmit}>
                <input
                  type="text"
                  readOnly
                  name="movieName"
                  value={formData?.movieName}
                />
                <input
                  type="text"
                  readOnly
                  name="genres"
                  value={formData?.genres}
                />
                <input
                  type="text"
                  readOnly
                  name="genres"
                  value={formData?.language}
                />
                <input
                  type="text"
                  readOnly
                  name="genres"
                  value={formData?.premiered}
                />

                <button className="bookbtn" type="submit">Book Ticket</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Booking;
