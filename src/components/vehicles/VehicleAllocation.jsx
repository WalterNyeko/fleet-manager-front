import React from "react";

export default function VehicleAllocation({
  state: {
    driverName,
    registrationNumber,
    changedBy,
    allocationDate,
    companyCode,
    costcenter,
    allocationStartDate,
    allocationOdometer,
    allocationEndDate,
    allocationEndOdometer,
    allocationLock,
    allocationWorkshop,
    allocationReason
  },
  handleInputChange
}) {
  return (
    <div className='row'>
      <form className='row' action='#'>
        <div className='card my-card'>
          <div className='card-body'>
            <div className='card-title'>
              <div className='row'>
                <div className='form-group col-md-4'>
                  <label>Driver Name</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='driverName'
                    value={driverName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Registration No.</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='registrationNumber'
                    value={registrationNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Changed By</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='changedBy'
                    value={changedBy}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Date</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationDate'
                    value={allocationDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Company Code</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='companyCode'
                    value={companyCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Cost Center</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='costcenter'
                    value={costcenter}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Start Date</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationStartDate'
                    value={allocationStartDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Odometer</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationOdometer'
                    value={allocationOdometer}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>End Date</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationEndDate'
                    value={allocationEndDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>End Odometer</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationEndOdometer'
                    value={allocationEndOdometer}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Lock</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationLock'
                    value={allocationLock}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Workshop</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationWorkshop'
                    value={allocationWorkshop}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Allocation Reason</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='allocationReason'
                    value={allocationReason}
                    onChange={handleInputChange}
                  />
                </div>

                <div className='form-group col-md-4 mb-0'>
                  <div>
                    <button
                      type='submit'
                      className='btn btn-primary waves-effect waves-light mr-1'
                    >
                      Submit
                    </button>{" "}
                    <button
                      type='reset'
                      className='btn btn-secondary waves-effect'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
