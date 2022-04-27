import React from "react";
import { Link } from "react-router-dom";
import "./event.css";

const Event = ({ event }) => {
  "";
  const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { img, name } = event;

  return (
    <div>
      <Link to="/order">
        <div className="event">
          <img src={img} alt="" className="img-fluid" />
          <div
            className="event-text"
            style={{
              backgroundColor: randomColor,
            }}
          >
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Event;
