import React from "react";

export default function VehicleSummary() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card mr-1">
          <div className="card-body custom-card">
            <div className="card-title">Statistics of your Operation</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Estimated Odometer</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4 mb-0">
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light mr-1"
                  >
                    Submit
                  </button>{" "}
                  <button
                    type="reset"
                    className="btn btn-secondary waves-effect"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
