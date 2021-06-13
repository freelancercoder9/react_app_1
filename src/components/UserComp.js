import React from "react";
import "../style.css";

function UserComp(props) {
  return (
    <div className="main-userComp">
      <div className="userComp">
        <div className="user-circle">GD</div>
        <div className="user-text">{props.userName}</div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default UserComp;
