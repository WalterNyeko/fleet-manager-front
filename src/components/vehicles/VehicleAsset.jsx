import React from "react";

export default function VehicleAsset({
  state: {
    registrationNumber,
    extraRegistrationNumber,
    assetDescription,
    assetType,
    assetMake,
    assetModel,
    assetIssueDate,
    assetRetuenDate,
    assetSerial,
    driverName
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
                  <label>Extra Registration No.</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='extraRegistrationNumber'
                    value={extraRegistrationNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Description</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetDescription'
                    value={assetDescription}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Type</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetType'
                    value={assetType}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Make</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetMake'
                    value={assetMake}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Model</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetModel'
                    value={assetModel}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Issue Date</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetIssueDate'
                    value={assetIssueDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Return Date</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetRetuenDate'
                    value={assetRetuenDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group col-md-4'>
                  <label>Asset Serial</label>{" "}
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='assetSerial'
                    value={assetSerial}
                    onChange={handleInputChange}
                  />
                </div>
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
      </form>
    </div>
  );
}
