import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logos/Group 1329.png";
import "./order.css";

const Orders = () => {
  return (
    <div className=" order-container">
      <div className="order-content container">
        <div>
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <img src={logo} style={{ width: "350px" }} alt="" />
            </Link>
          </div>
          <div className="order">
            <h4>Register as a Volunteer</h4>
            <form>
              <input type="text" placeholder="Enter Name" name="name" />
              <br />
              <br />
              <input type="email" placeholder="Enter email" name="email" />
              <br />
              <br />
              <input type="date" id="birthday" name="date" />
              <br />
              <br />
              <input type="text" placeholder="Description" name="description" />
              <br />
              <br />
              <input type="text" placeholder="Items Name" name="items" />
              <br />
              <br />
              <button className="RegistrationBtn">Registration</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
