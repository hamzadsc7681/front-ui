import React from "react";
import "./styles.css";

function IntroButton({ name, icon, className }) {
  return (
    <>
      <button className={className}>
        <span>{name}</span> <span>{icon}</span>
      </button>
    </>
  );
}

export default IntroButton;
