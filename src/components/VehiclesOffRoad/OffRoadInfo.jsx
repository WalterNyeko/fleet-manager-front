import React from "react";

export default function OffRoadInfo() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="form-group col-md-4">
          <label>Code</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Grounded Vehicle Status</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="status">Awaiting Recovery</option>
            <option value="status">Closed</option>
            <option value="status">Live</option>
            <option value="status">Pending Insurance Docs (In WS)</option>
            <option value="status">Pending Assessmemnt (In WS)</option>
            <option value="status">Pending Repair Quotation (In WS)</option>
            <option value="status">Pending Approval (WS)</option>
            <option value="status">Pending Allocation</option>
            <option value="status">Work in Progress</option>
            <option value="status">Repaired Awaiting Re-inspection</option>
            <option value="status">Ready for collection</option>
            <option value="status">Repaired and Collected</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Reason for closing</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="reason">Work completed</option>
            <option value="reason">Entry error</option>
            <option value="reason">Write off</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Registration No.</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Extra Registration No.</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Chassis Number</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Created By</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Cost Center</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="costcenter">Cost Center 1</option>
            <option value="costcenter">Cost Center 2</option>
            <option value="costcenter">Cost Center 3</option>
            <option value="costcenter">Cost Center 4</option>
            <option value="costcenter">Cost Center 5</option>
          </select>
        </div> 
        <div className="form-group col-md-4">
          <label>Divisin/Client</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="client">Client 1</option>
            <option value="client">Client 2</option>
            <option value="client">Client 3</option>
            <option value="client">Client 4</option>
            <option value="client">Client 5</option>
          </select>
        </div> 
        <div className="form-group col-md-4">
          <label>Accident Ref</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle ID</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Accident Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Status</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="status">IN USE</option>
            <option value="status">NOT IN USE</option>
          </select>
        </div> 
        <div className="form-group col-md-4">
          <label>Vehicle Location</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Defect/Damage</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Grounded Period Days</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Documentation Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Arrival Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Work in progress Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>VOR parts Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle collection delay</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4 mb-0">
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
