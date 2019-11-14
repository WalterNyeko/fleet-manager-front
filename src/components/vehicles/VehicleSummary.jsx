import React from "react";

export default function VehicleSummary() {
  return (
    <div className="row">
      <hr />
      <form className="row" action="#">
        <div className="form-group col-md-3">
          <label>Estimated Odometer</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-3">
          <label>Location Code</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="location">Location Code 1</option>
            <option value="location">Location Code 2</option>
            <option value="location">Location Code 3</option>
            <option value="location">Location Code 4</option>
            <option value="location">Location Code 5</option>
          </select>
        </div>
        <div className="form-group col-md-3">
          <label>Country</label>
          <div>
            <select className="browser-default custom-select">
              <option selected></option>
              <option value="country">Country 1</option>
              <option value="country">Country 2</option>
              <option value="country">Country 3</option>
              <option value="country">Country 4</option>
              <option value="country">Country 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Next Service</label>
          <div>
            <input
              type="email"
              className="form-control"
              required
              parsley-type="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Next Inspection</label>
          <div>
            <input
              type="email"
              className="form-control"
              required
              parsley-type="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Currency Codes</label>
          <div>
            <select className="browser-default custom-select">
              <option value="currency"></option>
              <option value="currency">Currency 1</option>
              <option value="currency">Currency 2</option>
              <option value="currency">Currency 3</option>
              <option value="currency">Currency 4</option>
              <option value="currency">Currency 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>In pool</label>
          <div>
            <select className="browser-default custom-select">
              <option value="pool"></option>
              <option value="pool">No</option>
              <option value="pool">Yes</option>
              <option value="pool">Local Pool Use Only</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>L/100Km</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Cost per Km</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Total Cost</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Number of Remaining Tyres</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3">
          <label>Cumilative Balance</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-3 mb-0">
          <div>
            <button
              type="submit"
              className="btn btn-primary waves-effect waves-light mr-1"
            >
              Submit
            </button>{" "}
            <button type="reset" className="btn btn-secondary waves-effect">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
