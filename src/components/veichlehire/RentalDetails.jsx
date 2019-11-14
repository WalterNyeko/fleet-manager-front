import React from "react";

export default function RentalDetails() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="form-group col-md-4">
          <label>Date Insurance Authorized</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Date Insurance Benefits End</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Invoiced By</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="invoice">Officer 1</option>
            <option value="invoice">Officer 2</option>
            <option value="invoice">Officer 3</option>
            <option value="invoice">Officer 4</option>
            <option value="invoice">Officer 5</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Date Inv. Prepared</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Insurance Days Off</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Daily Rental Charge</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Invoice No.</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Invoice Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Insurance Payment Days (IPD)</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Insurance Non Payment Days</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Invoices To</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="invoice">Company 1</option>
            <option value="invoice">Company 2</option>
            <option value="invoice">Company 3</option>
            <option value="invoice">Company 4</option>
            <option value="invoice">Company 5</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Payment Recieved</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="invoice">Yes</option>
            <option value="invoice">No</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Payment Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Payment Recieved By</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="recieved">Officer 1</option>
            <option value="recieved">Officer 2</option>
            <option value="recieved">Officer 3</option>
            <option value="recieved">Officer 4</option>
            <option value="recieved">Officer 5</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Payment Amount</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Payment Status</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="status">LIVE</option>
            <option value="status">CLOSED</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Reciept Details</label>{" "}
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
