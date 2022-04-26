import React from "react";
import "./OrderHistory.css";
import img from "../../../../Assets/images/extraVolunteer.png";
const OrderHistory = ({ orderHistory, deleteHandler }) => {
  const { items, date, _id } = orderHistory;

  return (
    <div>
      <div className="orderHistory">
        <div className="row">
          <div className="col-md-4">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h5>{items}</h5>
            <h6>{date}</h6>
            <p>
              <button onClick={() => deleteHandler(_id)}>Cancel</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
