import React from "react";
import OffRoadInfoComponent from "./OffRoadInfo";

export default function VehicleOffRoad() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div class="row add-vehicle">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title">Vehicle Off Road Information</h4>
                <ul class="nav nav-pills nav-justified" role="tablist">
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#offraodinfo-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="fas fa-home"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Default</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#rental-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-envelope"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">
                        Rental Collection Details
                      </span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#revenue-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="fas fa-cog"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Rental Revenue</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane active p-3"
                    id="offraodinfo-1"
                    role="tabpanel"
                  >
                    <OffRoadInfoComponent />
                  </div>
                  <div class="tab-pane p-3" id="rental-1" role="tabpanel">
                    {/* <HireDetailsComponent /> */}
                  </div>
                  <div class="tab-pane p-3" id="revenue-1" role="tabpanel">
                    {/* <RentalDetailsComponent /> */}
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
