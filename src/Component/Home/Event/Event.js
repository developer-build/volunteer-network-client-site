import React from "react";
import { Link } from "react-router-dom";
import "./event.css";

const Event = ({ event }) => {
  const { img, name } = event;

  return (
    <div>
      <Link to="/order">
        <div className="event">
          <img src={img} alt="" className="img-fluid" />
          <div className="event-text">
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Event;
