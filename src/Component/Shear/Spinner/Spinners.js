import React from "react";
import spinnerIcon from "../../../Assets/images/spinner.gif";
import "./Spinner.css";

const Spinners = () => {
  return (
    <div className="spinner">
      <div className="">
        <img style={{ width: "100px" }} src={spinnerIcon} alt="" />
      </div>
    </div>
  );
};

export default Spinners;
