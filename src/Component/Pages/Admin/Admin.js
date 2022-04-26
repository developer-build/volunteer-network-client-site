import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logos/Group 1329.png";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container p-3">
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <div>
              <Link to="/">
                {" "}
                <img style={{ width: "200px" }} src={logo} alt="" />
              </Link>
              <p>Volunteer register list</p>
              <p>Add event</p>
            </div>
          </div>
          <div className="col-md-9">
            <h4>Volunteer register list</h4>
            <div className="register-list">
              <div>sfdf</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
