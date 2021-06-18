import React from "react";
import "../style.css";
import img3 from "../images/img-3.jpeg";

function LivePanCard() {
  return (
    <div className="live-popUp ">
      <header className="popup-15 bg-info text-light fw-bold ">Live Screenshot: PanCard</header>
      <div className="popup-data">
        <div class="img-pop">
          <img src={img3} alt="img3" class="img-fluid" />
        </div>
        <div className="pop-details">
          <div className="pop-details-1">
            <div className="pan-num">Pan Number:BFLPS8370E</div>
            <div className="live-details">
              <label>Number per Pan</label>
              <label>: Vivek shahir</label>
            </div>
            <hr />
            <div className="live-details">
              <label htmlFor="">Name as per Aadhar</label>
              <label htmlFor="">: Vivek shahir</label>
            </div>
            <hr />
            <div className="live-details">
              <label htmlFor="">Name as per NSDLAPI</label>
              <label htmlFor="">: Vivek shahir</label>
            </div>
            <hr />
            <div className="live-details">
              <label htmlFor="">Name on Pan Card as per NSDLAPI</label>
              <label htmlFor="">: Vivek shahir</label>
            </div>
            <div className="live-btn">
              <button type="button" class="btn btn-danger">
                PanNumber Mismatch
              </button>
              <button type="button" class="btn btn-success">
                PanNumber Match
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <button type="button" class="btn btn-light ">
          Cancel
        </button>
      </footer>
    </div>
  );
}

export default LivePanCard;
