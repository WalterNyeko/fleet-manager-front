import React from "react";

const VehicleDiary = ({
  mySettings: { vehicleinsurancecompany },
  state: {
    waranty,
    warantyDistance,
    insuranceCompany,
    insuranceExpiry,
    insuranceCommencement,
    insuranceCertificate,
    motorInsurancePolicy,
    midOn,
    midOff,
    serviceDate,
    lastServiceDate,
    serviceSchedule,
    serviceIntervalWeeks,
    serviceIntervalKms,
    inspectionDate,
    inspectionType,
    inspectionIntervalDistance,
    inspectionCertificate,
    odometer,
    currentOdoDate,
    distancePerYear,
    distancePerDay,
    deviationperc,
    deviation,
    ageDays,
    ageYears,
    InspectionIntervalWeeks,
    lastServiceType
  },
  handleInputChange
}) => {
  return (
    <div className='row'>
      <form className='row' action='#'>
        <div className='card col-md-4 my-card'>
          <div className='card-body custom-card'>
            <div className='card-title'>
              <span className='text-dark h5'>Warranty Data</span>
            </div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-6'>
                <label>Warranty</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='waranty'
                  value={waranty}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-6'>
                <label>Warranty Distance</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='warantyDistance'
                  value={warantyDistance}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='form-group col-md-4'>
          <label>Insurance Company</label>
          <select
            className='browser-default custom-select'
            name='insuranceCompany'
            value={insuranceCompany}
            onChange={handleInputChange}
          >
            <option value='insurance' selected>
              Select Vehicle Insurance Company
            </option>
            {vehicleinsurancecompany &&
              vehicleinsurancecompany.length &&
              vehicleinsurancecompany.map(({ insurance_company_name }) => (
                <option value='insurance'>{insurance_company_name}</option>
              ))}
          </select>
        </div>
        <div className='form-group col-md-4'>
          <label>Insurance Expiry</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='insuranceExpiry'
            value={insuranceExpiry}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Insurance Commencement</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='insuranceCommencement'
            value={insuranceCommencement}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Insurance Certificate</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='insuranceCertificate'
            value={insuranceCertificate}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Motor Insurance Policy No.</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='motorInsurancePolicy'
            value={motorInsurancePolicy}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>MID On</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='midOn'
            value={midOn}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>MID Off</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='midOff'
            value={midOff}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Service Date</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='serviceDate'
            value={serviceDate}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Last Service Type</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='lastServiceType'
            value={lastServiceType}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Service Schedule</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='serviceSchedule'
            value={serviceSchedule}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Service Interval (Weeks)</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='serviceIntervalWeeks'
            value={serviceIntervalWeeks}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Service Interval (KMS)</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='serviceIntervalKms'
            value={serviceIntervalKms}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Inspection Date</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='inspectionDate'
            value={inspectionDate}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Inspection Type</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='inspectionType'
            value={inspectionType}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Inspection Interval (Weeks)</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='InspectionIntervalWeeks'
            value={InspectionIntervalWeeks}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Inspection Interval Distance</label>{" "}
          <input type='text' className='form-control' required placeholder='' />
        </div>
        <div className='form-group col-md-4'>
          <label>Inspection Certificate No.</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='inspectionCertificate'
            value={inspectionCertificate}
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
            name='odometer'
            value={odometer}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Current Odo Date</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='currentOdoDate'
            value={currentOdoDate}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Distance per year</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='distancePerYear'
            value={distancePerYear}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label>Distance per day</label>{" "}
          <input
            type='text'
            className='form-control'
            required
            placeholder=''
            name='distancePerDay'
            value={distancePerDay}
            onChange={handleInputChange}
          />
        </div>

        <div className='card col-md-8 my-card ml-4'>
          <div className='card-body custom-card'>
            <div className='card-title'>Insurance Data</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-4'>
                <label>Insurance Company</label>
                <select className='browser-default custom-select'>
                  <option value='insurance' selected>
                    Select Vehicle Insurance Company
                  </option>
                  {vehicleinsurancecompany &&
                    vehicleinsurancecompany.length &&
                    vehicleinsurancecompany.map(
                      ({ insurance_company_name }) => (
                        <option value='insurance'>
                          {insurance_company_name}
                        </option>
                      )
                    )}
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label>Insurance Expiry</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='insuranceExpiry'
                  value={insuranceExpiry}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Insurance Commencement</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='insuranceCommencement'
                  value={insuranceCommencement}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Insurance Certificate</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='insuranceCertificate'
                  value={insuranceCertificate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Motor Insurance Policy No.</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='motorInsurancePolicy'
                  value={motorInsurancePolicy}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>MID On</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='midOn'
                  value={midOn}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>MID Off</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='midOff'
                  value={midOff}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='card col-md-3 my-card ml-4'>
          <div className='card-body custom-card'>
            <div className='card-title'>Service Data</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-12'>
                <label>Service Date</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='serviceDate'
                  value={serviceDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Last Service Type</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='lastServiceType'
                  value={lastServiceType}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Service Schedule</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='serviceSchedule'
                  value={serviceSchedule}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Service Interval (Weeks)</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='serviceIntervalWeeks'
                  value={serviceIntervalWeeks}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Service Interval (KMS)</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='serviceIntervalKms'
                  value={serviceIntervalKms}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='card col-md-4 my-card ml-4'>
          <div className='card-body custom-card'>
            <div className='card-title'>Inspection Data</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-12'>
                <label>Inspection Date</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='inspectionDate'
                  value={inspectionDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Inspection Type</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='inspectionType'
                  value={inspectionType}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Inspection Interval (Weeks)</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='InspectionIntervalWeeks'
                  value={InspectionIntervalWeeks}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Inspection Interval Distance</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='inspectionIntervalDistance'
                  value={inspectionIntervalDistance}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Inspection Certificate No.</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='inspectionCertificate'
                  value={inspectionCertificate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='card col-md-4 my-card ml-2'>
          <div className='card-body custom-card'>
            <div className='card-title'>Vehicle Age/Distance Statistics</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-12'>
                <label>Distance per year</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='distancePerYear'
                  value={distancePerYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Distance per day</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='distancePerDay'
                  value={distancePerDay}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Age (Years)</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='ageYears'
                  value={ageYears}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Age (Days)</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='ageDays'
                  value={ageDays}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Deviation</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='deviation'
                  value={deviation}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-12'>
                <label>Deviation Perc</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='deviationperc'
                  value={deviationperc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='card col-md-11 my-card ml-5'>
          <div className='card-body custom-card'>
            <div className='card-title'>Current Odometer</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-4'>
                <label>Odometer</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='odometer'
                  value={odometer}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Current Odo Date</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='currentOdoDate'
                  value={currentOdoDate}
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
      </form>
    </div>
  );
};
export default VehicleDiary;
