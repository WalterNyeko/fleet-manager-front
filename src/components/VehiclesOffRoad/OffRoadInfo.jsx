import React from "react";

export default function OffRoadInfo() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-5 my-card ml-4 mr-4">
          <div className="card-body custom-card">
            <div className="card-title">STATISTICS SUMMARY</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Grounded Period (Days)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Documentation Period</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Approval Period</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Work in Progress Period</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>VOR Parts Period</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Collection Delay</label>{" "}
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

        <div className="card col-md-5 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Accident/Damage Details</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Accident Ref</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Accident Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle ID (From Accident file)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="status">IN USE</option>
                  <option value="status">NOT IN USE</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Location</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Vehicle Defect/Damage</label>{" "}
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

        <div className="card col-md-11 my-card mr-1">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Code</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Grounded Vehicle Status</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="suplier">Pending Assessment (In WS)</option>
                  <option value="suplier">
                    Pending Repair Quotation (In WS)
                  </option>
                  <option value="suplier">Pending Approval (In WS)</option>
                  <option value="suplier">Pending Allocation</option>
                  <option value="suplier">Work in Progress</option>
                  <option value="suplier">
                    Repaired awaiting Re-Inspection
                  </option>
                  <option value="suplier">Ready for collection</option>
                  <option value="suplier">Repared and collected</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Extra Registration No.</label>{" "}
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
                <label>Created By</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Chasis Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Cost Center</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="costcenter">FLEET MANAGEMENT SERVICES</option>
                  <option value="costcenter">NATIONAL ADMINISTRATION</option>
                  <option value="costcenter">RELIEF CAR</option>
                  <option value="costcenter">SERVICE PLAN</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Division/Client</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="division">Client 1</option>
                  <option value="division">Client 2</option>
                  <option value="division">Client 3</option>
                  <option value="division">Client 4</option>
                  <option value="division">Client 5</option>
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
