import { useParams } from "react-router-dom";
import "./summary.css";
import { Fragment, useState } from "react";
import Booking from "./Booking";

const Summary = ({ shows, match }) => {
  const { id } = useParams(match);

  // handke open form and close form 
  const [showFrom, setShowForm] = useState(false);

  const handleOpenModal = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };
  
  const show = shows.find((show) => show.show.id === Number(id));

  return (
    <Fragment>
      <div className="showSummaryDetails">
        <h1 className="tvShowDetails">Show Details</h1>
        <h1 className="showName">{show?.show?.name}</h1>
        <div className="showDetails">
          <div className="showInfo">
            <h3>Genres: {show?.show?.genres?.join(`, `)}</h3>
            <h3 className="showLanguage">Language: {show?.show?.language}</h3>
            <h3>Premiered: {show?.show?.premiered}</h3>
            <h3>Ratings: {show?.show?.rating?.average}</h3>
          </div>
          <div className="showSummary">
            <p>{show?.show?.summary}</p>
          </div>
          <div className="showBookingBtn">
            <button className="bookBtn" onClick={handleOpenModal}>
              Book Now
            </button>
          </div>
          <Booking
            showFrom={showFrom}
            closeForm={handleCloseModal}
            show={show}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
