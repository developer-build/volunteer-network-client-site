import React from "react";
import "./SignUp.css";
import logo from "../../../Assets/logos/Group 1329.png";
import googleIcon from "../../../Assets/logos/google.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Spinners from "../../Shear/Spinner/Spinners";
const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);

  if (user) {
    navigate("/order");
  }

  if (loading) {
    return <Spinners />;
  }
  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }
  return (
    <div className="register-container">
      <div>
        <Link to="/">
          <img src={logo} style={{ width: "350px" }} alt="" />
        </Link>
        <div className="sighUp">
          <h4>Sign Up With</h4>
          <button className="googleBtn" onClick={() => signInWithGoogle()}>
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
          <span className="text-center text-danger">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
