import React from "react";

export default function HireInfo() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-5 my-card ml-4 mr-4">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-12">
                <label>Rental Code</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="suplier">RESERVATION</option>
                  <option value="suplier">LIVE</option>
                  <option value="suplier">RETURNED</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Rental Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="suplier">BOOKED</option>
                  <option value="suplier">APPROVED</option>
                  <option value="suplier">REQUESTED</option>
                  <option value="suplier">COMPLETED</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Reason</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="suplier">Insurance Company</option>
                  <option value="suplier">GLD Expense</option>
                  <option value="suplier">Lessor</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Cost Center</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="suplier">FLEET MANAGEMENT SERVICES</option>
                  <option value="suplier">NATIONAL ADMINISTRATION</option>
                  <option value="suplier">RELIEF CAR</option>
                  <option value="suplier">SERVICE PLAN</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-5 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Vehicle Details</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Relief Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Extra Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Replaced Plate</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Replaced Plate Cost Center</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-11 my-card">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Temperature Contract End Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>From Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>From Time</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>To Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>To Time</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Odometer Out</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Odometer In</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>On Hire Reference</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Off Hire Reference</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Days</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Distance</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Comments</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
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
