import React from "react";
import { NavLink, Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div>
      HomeScreen <br /> <br />
      <NavLink to="/videoKYC" className="btn btn-primary">
        VideoKYC
      </NavLink>
      <NavLink to="/popUp15" className="btn btn-secondary">
        PopUp15
      </NavLink>
      <NavLink to="/livePanCard" className="btn btn-primary">
        LivePanCard
      </NavLink>
      <Link
        className="btn btn-primary"
        to={{
          pathname: "/header14",
          state: {
            userName1: "Vivek V Shahir",
            pipeText: "Lorem ipsum dolor ipsum",
          },
        }}
      >
        Header14
      </Link>
    </div>
  );
}

export default HomeScreen;
