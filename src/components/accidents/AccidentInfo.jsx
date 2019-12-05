import React from "react";

export default function AccidentInfo() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Accident Ref.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Claim Handler</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Created By</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Accident Type</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="accident">Accident Claim</option>
                  <option value="accident">Public Liability Claim</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Accident Report from Recieved</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Date claim completed</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Type of Loss/Claim</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="loss">SELF self involving</option>
                  <option value="loss">
                    OWN3P Own damage including third party person
                  </option>
                  <option value="loss">
                    OWN3V Own damage including third party person
                  </option>
                  <option value="loss">WIG Widescreen Damage</option>
                  <option value="loss">PL - Public Liability Insurance</option>
                  <option value="loss">TH - Total Theft</option>
                  <option value="loss">TP - 3rd Party Motor Insurance</option>
                  <option value="loss">TP - Partial Theft</option>
                  <option value="loss">Own Damage Only</option>
                  <option value="loss">WDG Window Glass</option>
                  <option value="loss">Fire Damage</option>
                  <option value="loss">
                    Special Perils (Earthquake, Flood and Lightening)
                  </option>
                  <option value="loss">
                    Hit and Run by Third Party Vehicle
                  </option>
                  <option value="loss">Total Loss</option>
                  <option value="loss">Malicious Damage</option>
                  <option value="loss">Political Violence</option>
                  <option value="loss">Terrorism and Sabortage</option>
                  <option value="loss">Nuclear Damage</option>
                  <option value="loss">Riot and Strike</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Date Insurers Notified</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Accident Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="accident">Live</option>
                  <option value="accident">Closed</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Insurance Reference</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Liability Flag</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="liability">Yes</option>
                  <option value="liability">No</option>
                  <option value="liability">Disputed</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Brokers Name</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="broker">Broker 1</option>
                  <option value="broker">Broker 2</option>
                  <option value="broker">Broker 3</option>
                  <option value="broker">Broker 4</option>
                  <option value="broker">Broker 5</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Broker Reference</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Party to Blame</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="blame">Insured Driver</option>
                  <option value="blame">Other Driver</option>
                  <option value="blame">Another Party Outside Vehicle</option>
                  <option value="blame">Under Investigation</option>
                  <option value="blame">Force Majeur - Acts of God</option>
                  <option value="blame">Can Not Determine</option>
                  <option value="blame">Can Not Determine</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Company Code</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="company">Company 1</option>
                  <option value="company">Company 2</option>
                  <option value="company">Company 3</option>
                  <option value="company">Company 4</option>
                  <option value="company">Company 5</option>
                </select>
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
