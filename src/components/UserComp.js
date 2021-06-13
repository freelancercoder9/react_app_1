import React from "react";
import "../style.css";

function UserComp(props) {
  const colorCodes = {
    A: "#800000",
    B: "#D2691E",
    C: "#000000",
    D: "#2F4F4F",
    E: "#708090",
    F: "#696969",
    G: "#C71585",
    H: "#DB7093",
    I: "#FF1493",
    J: "#FF69B4",
    K: "#4B0082",
    L: "#800080",
    M: "#8B008B",
    N: "#9932CC",
    O: "#9400D3",
    P: "#8A2BE2",
    Q: "#BA55D3",
    R: "#483D8B",
    S: "#191970",
    T: "#000080",
    U: "#0000CD",
    V: "#0000FF",
    W: "#4169E1",
    X: "#4682B4",
    Y: "#6495ED",
    Z: "#008080",
    1: "#6B8E23",
    2: "#556B2F",
    3: "#808000",
    4: "#2E8B57",
    5: "#3CB371",
    6: "#8FBC8F",
    7: "#006400",
    8: "#228B22",
    9: "#32CD32",
    10: "#FF4500",
  };
  const abbValue = () => {
    let userName = props.userName;
    let acronym = userName.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), "");
    console.log(acronym);
    let userAbb = acronym.length < 2 ? acronym : acronym.substring(0, 2);
    return userAbb.toUpperCase();
  };
  const setBackGroundColor = () => {
    return colorCodes[abbValue().charAt(0)];
  };
  return (
    <div className="main-userComp">
      <div className="userComp">
        <div style={{ backgroundColor: setBackGroundColor() }} className="user-circle">
          {abbValue()}
        </div>
        <div className="user-text">{props.userName}</div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default UserComp;
