import React from "react";
import logo from "../../../Assets/logos/Group 1329.png";
import googleIcon from "../../../Assets/logos/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="register-container text-center">
        <div>
          <Link to="/">
            <img src={logo} style={{ width: "350px" }} alt="" />
          </Link>
          <div className="sighUp">
            <h4>Sign In With</h4>
            <button className="googleBtn">
              <img
                style={{ width: "40px", paddingRight: "10px" }}
                src={googleIcon}
                alt=""
              />
              Sing In With Google
            </button>
            <p className="mt-3">
              Don’t have an account?
              <Link to="/sigh-up"> Create an account</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
