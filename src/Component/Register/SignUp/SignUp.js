import React from "react";
import "./SignUp.css";
import logo from "../../../Assets/logos/Group 1329.png";
import googleIcon from "../../../Assets/logos/google.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="register-container">
      <div>
        <Link to="/">
          <img src={logo} style={{ width: "350px" }} alt="" />
        </Link>
        <div className="sighUp">
          <h4>Sign Up With</h4>
          <button className="googleBtn">
            <img
              style={{ width: "40px", paddingRight: "10px" }}
              src={googleIcon}
              alt=""
            />
            Sing Up With Google
          </button>
          <p className="mt-3">
            already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
