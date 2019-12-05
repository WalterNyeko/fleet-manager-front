import React from "react";

export default function OffRoadTracking() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-3 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Workshop Repair Details</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Workshop</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="workshop">Workshop 1</option>
                  <option value="workshop">Workshop 2</option>
                  <option value="workshop">Workshop 3</option>
                  <option value="workshop">Workshop 4</option>
                  <option value="workshop">Workshop 5</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Date Vehicle Recieved at Workshop</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Job completion date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Awaiting Parts</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="parts">Yes</option>
                  <option value="parts">No</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Job start date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle collection date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Remark/Comments/Status</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Status Owner</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="owner">Owner 1</option>
                  <option value="owner">Owner 2</option>
                  <option value="owner">Owner 3</option>
                  <option value="owner">Owner 4</option>
                  <option value="owner">Owner 5</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        <div className="card col-md-8 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Ordered Parts Details</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-6">
                <label>Code</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Part Pre-Ordering Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Part Name</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Job No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Order Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>order Age</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Order Quantity</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>TTAF Source</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Expected Arrival Date(ETA)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Actual Arrival Date (In Stock)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Arrival Age</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Recieved Date at Branch</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Remarks/Comments</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6 mb-0">
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
