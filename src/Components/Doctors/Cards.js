import React from "react";
import "./styles.css";

function Cards({ image, text }) {
  return (
    <>
      <div className="col-md-4">
        <div className="cards">
          <img
            src={image}
            alt="doctor"
            className="img-fluid"
            style={{ borderRadius: "7px" }}
          />
          <div className="text-center pt-1 pb-5">
            <span className="cards_text">{text}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
