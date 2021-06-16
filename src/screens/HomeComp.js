import React from "react";
import { NavLink } from "react-router-dom";

function HomeComp() {
  return (
    <div className="container-fluid">
      HOME Screen
      <br />
      <NavLink to="/VidoeKYC" className="btn btn-primary">
        COMP 1
      </NavLink>
      <br />
      <br />
      <NavLink to="/Popup15" className="btn btn-primary">
        popup15
      </NavLink>
    </div>
  );
}

export default HomeComp;
