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
            <option value="suplier">Pending Assessment (In WS)</option>
            <option value="suplier">Pending Repair Quotation (In WS)</option>
            <option value="suplier">Pending Approval (In WS)</option>
            <option value="suplier">Pending Allocation</option>
            <option value="suplier">Work in Progress</option>
            <option value="suplier">Repaired awaiting Re-Inspection</option>
            <option value="suplier">Ready for collection</option>
            <option value="suplier">Repared and collected</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Reason for closing</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="suplier">Entry Error</option>
            <option value="suplier">Work Completed</option>
            <option value="suplier">Write Off</option>
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
          <label>Created By</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Chasis Number</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
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
        <div className="form-group col-md-4">
          <label>Accident Ref</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle ID (From Accident file)</label>{" "}
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
            <option value="division">IN USE</option>
            <option value="division">NOT IN USE</option>
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
          <label>Grounded Period (Days)</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Documentation Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Approval Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Work in Progress Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>VOR Parts Period</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Collection Delay</label>{" "}
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
