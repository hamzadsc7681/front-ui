import React from "react";
import Cards from "../../Components/Steps/Cards";
import { data } from "../../Components/Steps/Data";
import "./styles.css";

function Steps() {
  return (
    <>
      <div className="container-fluid pt-5 pb-5">
        <div className="container text-center pt-4 pb-5">
          <h3 className="step_heading">Its easy and quick three steps</h3>
        </div>
        <div className="container steps_insider pb-5">
          <div className="row">
            {data.map((val) => {
              return (
                <Cards logo={val.logo} step={val.step} detail={val.detail} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
