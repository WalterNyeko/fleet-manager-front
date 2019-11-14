import React from "react";

export default function RepairHistory() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="form-group col-md-4">
          <label>Job Authorization No.</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Workshop</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Job Status</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
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
          <label>Model Code</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Division/Client</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Cost Center</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Odometer In</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Reason</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Job Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Job End Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Invoice</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Total Invoice</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Comments</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Paperwork Status</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Cost Labour</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Created By</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Changed By</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Date</label>{" "}
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
