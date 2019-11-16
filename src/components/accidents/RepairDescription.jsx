import React from "react";

export default function RepairDescription() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
                <label>Division/Client</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Reason</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="reason">
                    ACCIDENT REPAIRS - BELOW EXCESS
                  </option>
                  <option value="reason">
                    ACCIDENT REPAIRS - BROKEN APPROVED
                  </option>
                  <option value="reason">ACCIDENT REPAIRS - INSURANCE</option>
                  <option value="reason">ACCIDENT REPAIRS - OWN COST</option>
                  <option value="reason">BATTERY REPLACEMENT</option>
                  <option value="reason">GENERAL REPAIRS</option>
                  <option value="reason">REPAIRS - OUT OF CONTACT</option>
                  <option value="reason">REPAIRS - WITHIN CONTRACT</option>
                  <option value="reason">ROUTINE SERVICE</option>
                  <option value="reason">TIRE REPLACEMENT</option>
                  <option value="reason">TIRE SERVICE</option>
                  <option value="reason">TOWING - OUT OF CONTRACT</option>
                  <option value="reason">TOWING ACCIDENT</option>
                  <option value="reason">TOWING MECHANICAL</option>
                  <option value="reason">VEHICLE INSPECTION</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Service Type.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Job Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Job End Date</label>{" "}
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
                <label>Odometer Out</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Days Off Road</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Cost Center</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Service Advisor</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Job Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="job">Closed - Waiting For Parts</option>
                  <option value="job">Waiting For Parts</option>
                  <option value="job">Work Completed Not Closed</option>
                  <option value="job">Work Not Done</option>
                  <option value="job">Awaiting L.P.O</option>
                  <option value="job">Booking</option>
                  <option value="job">Closed No Docs Recieved</option>
                  <option value="job">Closed User Error</option>
                  <option value="job">Parts on Order</option>
                  <option value="job">Technician Complete</option>
                  <option value="job">
                    Work Completed awaiting photo upload
                  </option>
                  <option value="job">Work in Progress</option>
                  <option value="job">YET TO START</option>
                  <option value="job">CLOSED</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Paperwork Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="paperwork">Paperwork Recieved</option>
                  <option value="paperwork">
                    Verbal Confirmation no paperwork
                  </option>
                  <option value="paperwork">Missed not done</option>
                  <option value="paperwork">Missed VOR</option>
                  <option value="paperwork">Email Request</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Cost Parts</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Cost Labour</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Total Net</label>{" "}
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
