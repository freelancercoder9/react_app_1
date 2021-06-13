import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MenuOption(props) {
  return (
    <div
      className="main-menuOption"
      onClick={() => {
        props.onClickEvent(props.menuName);
      }}
    >
      <div>
        <div className="menuOption">
          <FontAwesomeIcon icon={props.iconName} />
          {props.isHeader ? (
            <div className="text-workApps">{props.menuName}</div>
          ) : (
            <div className="text-New">{props.menuName}</div>
          )}
        </div>
        {props.isLine ? (
          <div>
            <hr className="line-menuOption" />
            <hr className="line-menuOption1" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default MenuOption;
