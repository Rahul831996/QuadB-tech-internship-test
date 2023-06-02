import "./home.css"
import { Link } from "react-router-dom";

const Home = ({ shows }) => {
    return (
      <div className="showContainer"> 
      <h1 className="tvShows">TV SHOWS</h1>
        <ul className="nameContent">
          {shows.map((show) => (
            <li className="showCard" key={show.show.id}>
              <Link className="" to={`/summary/${show.show.id}`}>
                <img src={show?.show.image.medium} alt="" />
                 <h2 className="nameBottom"> {show.show.name}</h2>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Home;
