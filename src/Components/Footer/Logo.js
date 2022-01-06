import React from "react";
import logo from "../../Assets/logo.png";
import "./styles.css";

function Logo() {
  return (
    <>
      <div className="text-center">
        <img src={logo} alt="care&care" className="logo_pic" />
        <h4 className="logo_headings">Care & Care</h4>
        <span className="logo_paras">Pharmacy</span>
      </div>
    </>
  );
}

export default Logo;
