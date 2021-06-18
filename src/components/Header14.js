import React from "react";
import { useLocation } from "react-router";
import "../style.css";

function Header14(props) {
  return (
    <div className="main-header">
      <div className="row color-check ">
        <div className="col-md-2 ">
          <div className="p-1">{"Vivek"}</div>
          <div className="p-1 pipe-text">{"scndsjcsd"}</div>
        </div>

        <div className="col-md-6 flex-check comp-background">
          <button type="button" class="btn btn-info btn-sm">
            1.Verify Details
          </button>
          <button type="button" class="btn btn-info btn-sm">
            2.Pan Card
          </button>
          <button type="button" class="btn btn-info btn-sm">
            3.User Face
          </button>
          <button type="button" class="btn btn-info btn-sm">
            4.Signature
          </button>
          <button type="button" class="btn btn-info btn-sm">
            5.Face Comparision
          </button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3  flex-check pr-1">
          <button type="button" class="btn btn-success btn-sm">
            Successfull
          </button>
          <button type="button" class="btn btn-warning btn-sm">
            Unable
          </button>
          <button type="button" class="btn btn-danger btn-sm">
            Reject
          </button>
        </div>
      </div>
      <hr className="line-menuOption" />
    </div>
  );
}

export default Header14;
