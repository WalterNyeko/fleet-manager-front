import React from "react";

export default function AllVeichles({ vehicles }) {
  return (
    <div className="row all-vehicles">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div className="card col-md-12 my-card ml-1">
                  <div className="card-body custom-card">
                    <h4 class="mt-0 header-title">All Vehcles</h4>
                    <div className="row">
                      <div
                        class="card-body"
                        style={{ "overflow-x": "auto", "overflow-y": "auto" }}
                      >
                        <table
                          id="datatable-buttons"
                          class="table table-striped w-auto table-sm 
                  table-bordered dt-responsive nowrap"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%"
                          }}
                        >
                          <thead>
                            <tr>
                              <th>Registration No.</th>
                              <th>Extra Registration No.</th>
                              <th>Division/Client</th>
                              <th>Location Code</th>
                              <th>Make Code</th>
                              <th>Model Code</th>
                              <th>Vehicle Status</th>
                              <th>Cost Center</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vehicles &&
                              vehicles.length &&
                              vehicles.map(
                                ({
                                  registration_no,
                                  extra_registration_no,
                                  vehicle_client,
                                  vehicle_location_code,
                                  vehicle_make_code,
                                  vehicle_model_code,
                                  vehicle_cost_center,
                                  vehicle_status
                                }) => (
                                  <tr>
                                    <td>{registration_no}</td>
                                    <td>{extra_registration_no}</td>
                                    <td>{vehicle_client}</td>
                                    <td>{vehicle_location_code}</td>
                                    <td>{vehicle_make_code}</td>
                                    <td>{vehicle_model_code}</td>
                                    <td>{vehicle_status}</td>
                                    <td>{vehicle_cost_center}</td>
                                  </tr>
                                )
                              )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
