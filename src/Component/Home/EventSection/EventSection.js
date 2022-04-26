import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import "./EventSection.css";

const EventSection = () => {
  const [events, setEvens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => setEvens(data));
  }, []);

  return (
    <div className="event-container">
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-2 gy-5 gx-4">
          {events.map((event) => (
            <Event event={event} key={event._id}></Event>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
