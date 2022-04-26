import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logos/Group 1329.png";
import "./order.css";
import { toast } from "react-toastify";

const Orders = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const date = event.target.date.value;
    const description = event.target.description.value;
    const items = event.target.items.value;

    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        date: date,
        description: description,
        items: items,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.acknowledged) {
          toast("Thank you, your order has been completed!");
        }
        event.target.reset();
      });
  };
  return (
    <div className=" order-container">
      <div className="order-content container">
        <div>
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <img
                src={logo}
                style={{ width: "350px" }}
                className="img-fluid"
                alt=""
              />
            </Link>
          </div>
          <div className="order">
            <h4>Register as a Volunteer</h4>
            <form onSubmit={submitHandler}>
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
