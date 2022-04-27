import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../Assets/logos/Group 1329.png";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <div className="admin-container p-3">
      <div className="px-5">
        <div className="row ">
          <div className="col-md-3">
            <div>
              <Link to="/">
                <img style={{ width: "200px" }} src={logo} alt="" />
              </Link>
              <br />
              <br />
              <NavLink className="list-link" to="register-list">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faUserAlt}
                />
                Volunteer register list
              </NavLink>
              <br />
              <br />
              <NavLink className="list-link" to="add-event">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faPlus}
                />
                Add event
              </NavLink>
            </div>
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
