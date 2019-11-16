import React from "react";

export default function VehicleBasic() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card mr-1">
          <div className="card-body custom-card">
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Exterior Colour</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Gear Box</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="gear">Automatic</option>
                  <option value="gear">CVT</option>
                  <option value="gear">Manual</option>
                  <option value="gear">Tiptronic</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Ecoscore</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Interior Colour</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>No. of Doors</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Co2gkm</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Key Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Chassis Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Fiscal hp</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Engine Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Engine Cc</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Distance home to work</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Phone Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>BHP</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>CO2 Deducability</label>
                <div>
                  <select className="browser-default custom-select">
                    <option selected></option>
                    <option value="country">50%</option>
                    <option value="country">60%</option>
                    <option value="country">70%</option>
                    <option value="country">75%</option>
                    <option value="country">80%</option>
                    <option value="country">90%</option>
                    <option value="country">100%</option>
                    <option value="country">120%</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Gross Vehicle Weight</label>
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
                <label>Winter Tyres</label>
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
                <label>Winter Tyres Location</label>
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
                <label>Tank Size</label>
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
