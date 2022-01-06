import React from "react";
import Cards from "../../Components/Doctors/Cards";
import { data } from "../../Components/Doctors/Data";

function Doctors() {
  return (
    <>
      <div className="container-fluid main_doctor mt-5 pt-5 pb-5">
        <div className="container text-center">
          <h3 className="doc_heading">We have best Doctors related to</h3>
        </div>
        <div className="container">
          <div className="row">
            {data.map((val) => {
              return <Cards image={val.image} text={val.text} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors;
