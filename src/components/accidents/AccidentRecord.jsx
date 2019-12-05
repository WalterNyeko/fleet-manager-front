import React from "react";

export default function AccidentRecord() {
  return (
    <div class="row">
      <div class="card">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="row">
              <div class="card-body" style={{ "overflow-x": "auto", "overflow-y": "auto" }}>
                <table
                  id="datatable-buttons"
                  class="table table-striped table-bordered dt-responsive nowrap"
                  style={{
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    width: "100%"
                  }}
                >
                  <thead>
                    <tr>
                      <th>Accident Ref.</th>
                      <th>Cost Type</th>
                      <th>Supplier</th>
                      <th>Entry Date</th>
                      <th>Estimate Number</th>
                      <th>Estimate Value</th>
                      <th>Actual Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Accident Ref.</td>
                      <td>Cost Type</td>
                      <td>Supplier</td>
                      <td>Entry Date</td>
                      <td>Estimate Number</td>
                      <td>Estimate Value</td>
                      <td>Actual Value</td>
                    </tr>
                    <tr>
                    <td>Accident Ref.</td>
                      <td>Cost Type</td>
                      <td>Supplier</td>
                      <td>Entry Date</td>
                      <td>Estimate Number</td>
                      <td>Estimate Value</td>
                      <td>Actual Value</td>
                    </tr>
                    <tr>
                    <td>Accident Ref.</td>
                      <td>Cost Type</td>
                      <td>Supplier</td>
                      <td>Entry Date</td>
                      <td>Estimate Number</td>
                      <td>Estimate Value</td>
                      <td>Actual Value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
