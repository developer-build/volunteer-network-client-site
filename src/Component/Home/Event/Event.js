import React from "react";
import "./event.css";

const Event = ({ event }) => {
  const { img, name } = event;

  return (
    <div>
      <div>
        <div className="event">
          <img src={img} alt="" className="img-fluid" />
          <div className="event-text">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
