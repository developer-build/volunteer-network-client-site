import React from "react";
import logo from "../../../Assets/logos/Group 1329.png";
import googleIcon from "../../../Assets/logos/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Init";
import Spinners from "../../Shear/Spinner/Spinners";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Spinners />;
  }
  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }
  return (
    <div>
      <div className="register-container text-center">
        <div>
          <Link to="/">
            <img src={logo} style={{ width: "350px" }} alt="" />
          </Link>
          <div className="sighUp">
            <h4>Sign In With</h4>
            <button className="googleBtn" onClick={() => signInWithGoogle()}>
              <img
                style={{ width: "40px", paddingRight: "10px" }}
                src={googleIcon}
                alt=""
              />
              Sing In With Google
            </button>
            <p className="mt-3">
              Don’t have an account?
              <Link to="/sigh-up"> Create an account</Link>
            </p>
            <span className="text-center text-danger">{errorMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
