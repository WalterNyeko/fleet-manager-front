import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Notes({ handleDateChange, date }) {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-4">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-3">
                <label>Date</label> <br />
                <DatePicker
                  selected={date}
                  onChange={handleDateChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Contract Baloon Payment</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-3">
                <label>Notes</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-3 mb-0">
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
