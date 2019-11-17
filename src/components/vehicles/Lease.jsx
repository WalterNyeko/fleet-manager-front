import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Lease = ({
  handleLeaseEndDateChange,
  handleContractStartDateChange,
  handlePaymentDateChange,
  handleReleaseDateChange,
  contractStartDate,
  paymentDate,
  releaseDate,
  leaseEndDate
}) => {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-3 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Non Driven Reimbushment</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Tyres and Batteries Provision</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Restoration Works Provision</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Service Provision</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Maintenance Provision</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Total Maintenance Provision</label>{" "}
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

        <div className="card col-md-8 my-card ml-4">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-6">
                <label>Finance Co./Owner</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Electronically Invoiced?</label>
                <select className="browser-default custom-select">
                  <option selected />
                  <option value="invoice">Yes</option>
                  <option value="invoice">No</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Lease End Date</label> <br />
                <DatePicker
                  selected={leaseEndDate}
                  onChange={handleLeaseEndDateChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Sales Outlet</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>

              <div className="form-group col-md-6">
                <label>Contract RV Payment Date</label> <br />
                <DatePicker
                  selected={paymentDate}
                  onChange={handlePaymentDateChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Contract Annual Distance</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              
              <div className="form-group col-md-6">
                <label>Fuel Provision per Month</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>

              <div className="form-group col-md-6">
                <label>Vehicle Release Date</label> <br />
                <DatePicker
                  selected={releaseDate}
                  onChange={handleReleaseDateChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Sales Preparation Date</label>
                <select className="browser-default custom-select">
                  <option selected />
                  <option value="sale">Direct Debit</option>
                  <option value="sale">Cheques</option>
                  <option value="sale">BACS</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Lease Contract No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Lot Number</label>{" "}
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

       

        <div className="card col-md-3 my-card ml-4">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-12">
                <label>Supply Method</label>
                <select className="browser-default custom-select">
                  <option selected />
                  <option value="lease">Purchase</option>
                  <option value="lease">Hire Purchase</option>
                  <option value="lease">Contract Hire</option>
                  <option value="lease">Finance Lease</option>
                  <option value="lease">Operating Lease</option>
                  <option value="lease">Novated Lease</option>
                  <option value="lease">Other</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Contract Start Date</label> <br />
                <DatePicker
                  selected={contractStartDate}
                  onChange={handleContractStartDateChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-12 mb-0">
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




        <div className="card col-md-8 my-card ml-4">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-6">
                <label>Contract No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Contract Duration</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              
              <div className="form-group col-md-6">
                <label>contract Distance</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Contract Option Code</label>
                <select className="browser-default custom-select">
                  <option selected />
                  <option value="contract">35000 ANUAL MILEAGE</option>
                  <option value="contract">AA FIVE STAR RECOVERY</option>
                  <option value="contract">ACCIDENT DAMAGE COVER</option>
                  <option value="contract">AWARD BANK INCENTIVE SCHEME</option>
                  <option value="contract">
                    BODY REPAIRS INCLUDED (MAINTENANCE)
                  </option>
                  <option value="contract">COLLECTION & DELIVERY</option>
                  <option value="contract">
                    COMMERCIAL VEHICLE CONTRACTS RETURN AGREEMENT
                  </option>
                  <option value="contract">
                    COURTESY VEHICLE PROVIDED FOR SERVICE
                  </option>
                  <option value="contract">DOES NOT COVER TYRES</option>
                  <option value="contract">EXCESS MILEAGE CHARGE 10P</option>
                  <option value="contract">EXCESS RATE</option>
                  <option value="contract">
                    FULL COVER ON TYRES (INCLUDING PUNCTURES)
                  </option>
                  <option value="contract">FULL MAINTENANCE COVER</option>
                  <option value="contract">
                    FULL LEASE INCLUDING TYRES, BETTERY & ACCIDENT REPAIR
                  </option>
                  <option value="contract">
                    FULL MAINTENANCE NO REPLACEMENT VEHICLE
                  </option>
                  <option value="contract">FULL RECOVERY</option>
                  <option value="contract">FULL TYRE COVER NO PUNTURES</option>
                  <option value="contract">INFLATION PROOFING</option>
                  <option value="contract">INSURANCE COVER NO ENGINE</option>
                  <option value="contract">MILEAGE COVERED</option>
                  <option value="contract">MOT INCLUDED</option>
                  <option value="contract">
                    NO COLLECTION & DELIVERY FOR SERVICE OR REPAIRS
                  </option>
                  <option value="contract">NO COVER FOR MAJOR UNITS</option>
                  <option value="contract">NO CRANE MAINTENANACE</option>
                  <option value="contract">NO EXCESS MILEAGE</option>
                  <option value="contract">NO MAINTENANCE COBVER</option>
                  <option value="contract">NO MOT INCLUDED</option>
                  <option value="contract">NO RECOVERY</option>
                  <option value="contract">
                    NO REPLACEMENT VEHICLE AVAILABLE
                  </option>
                  <option value="contract">
                    NO REPLACEMENT VEHICLE AVAILABLE SUPPLIED CHARGE $75
                  </option>
                  <option value="contract">NO ROAD FUND INCLUDED</option>
                  <option value="contract">ONE SET TYRES PER YEAR</option>
                  <option value="contract">OUT OF HOURS SERVICING</option>
                  <option value="contract">
                    OUT OF HOURS SERVICING NOT INCLUDED
                  </option>
                  <option value="contract">PREVENTIVE MAINTENANCE</option>
                  <option value="contract">PREVENTIVE MAINTENANCE ONLY</option>
                  <option value="contract">RAC COVER</option>
                  <option value="contract">RECOVERY SERVICE</option>
                  <option value="contract">REFUBRISHMENT WAIVE $150.00</option>
                  <option value="contract">
                    REPLACEMENT VEHICLE AFTER 12 HOURS
                  </option>
                  <option value="contract">
                    REPLACEMENT VEHICLE AFTER 24 HOURS
                  </option>
                  <option value="contract">
                    REPLACEMENT VEHICLE AFTER 48 HOURS
                  </option>
                  <option value="contract">RESPONSE TIME FOUR HOURS</option>
                  <option value="contract">ROAD FUND LICENCE INCLUDED</option>
                  <option value="contract">SEE BADGAS CROSS MAINTENANCE</option>
                  <option value="contract">SEE FORD CREDIT MAINTENANCE</option>
                  <option value="contract">
                    SEE TRANSOLVER MAINTENACE COVER
                  </option>
                  <option value="contract">SERVICE AGREEMENT</option>
                  <option value="contract">
                    SERVICE AND REPAIR WORK ON CRANE (CHARGEABLE)
                  </option>
                  <option value="contract">
                    SERVICE AND REPAIR WORK ON CRANE FULL MAINTENANCE
                  </option>
                  <option value="contract">SERVICE ONLY</option>
                  <option value="contract">
                    TAIL LIFT FULL MAINTENANCE COVER
                  </option>
                  <option value="contract">
                    TYRES REFER TO LEASE COMPANY FOR ORDER
                  </option>
                </select>
              </div>
             
              <div className="form-group col-md-12">
                <label>Excess Charge</label>{" "}
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


      </form>
    </div>
  );
};
export default Lease;
