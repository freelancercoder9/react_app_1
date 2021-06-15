import React from "react";

function PopUp15(props) {
  return (
    <div className="main-popup-15">
      <header className="popup-15">Verify Details</header>
      <div>
        <div className="details">
          <label htmlFor="">DOB</label>
          <label htmlFor="">:12june2010</label>
          <input type="checkbox" />
        </div>
        <hr />
        <div className="details">
          <label htmlFor="">MName</label>
          <label htmlFor="">:Neetha</label>
          <input type="checkbox" />
        </div>
        <hr />
        <div className="details">
          <label htmlFor="">POB</label>
          <label htmlFor="">:Mahabubnagar</label>
          <input type="checkbox" />
        </div>
        <hr />
        <div className="details">
          <label htmlFor="">Occupation</label>
          <label htmlFor="">:Services</label>
          <input type="checkbox" />
        </div>
        <hr />
        <div className="details">
          <label htmlFor="">Pincode</label>
          <label htmlFor="">:400901</label>
          <input type="checkbox" />
        </div>
        <hr />
      </div>
      <footer className="foot-pop  ">
        <button type="button" class="btn btn-secondary ">
          Cancel
        </button>
        <button type="button" class="btn btn-info mx-4 my-2">
          Submit
        </button>
      </footer>
    </div>
  );
}

export default PopUp15;
