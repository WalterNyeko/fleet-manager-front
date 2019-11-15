import React from "react";
import RepairInfoComponent from "./RepairInfo";
import RepairDescriptionComponent from "./RepairDescription";
import RepairCostComponent from "./RepairCost";
import RepairInvoiceComponent from "./RepairInvoice";
import RepairHistoryComponent from "./RepairHistory";
import VehicleRepairsComponent from "../accidents/VehicleRepairs";
import AccidentInfoComponent from "../accidents/AccidentInfo";
import AccidentDescriptionComponent  from "../accidents/AccidentDescription";

export default function AccidentRecord() {
  return (
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#default"
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
                href="#description-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Description</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a class="nav-link" data-toggle="tab" href="#cost-1" role="tab">
                <span class="d-block d-sm-none">
                  <i class="far fa-envelope"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Estimated Cost</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#invoice-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Invoice Details</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#service-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Service History</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#repairrecords"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Repair Records</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active p-3" id="default" role="tabpanel">
              <RepairInfoComponent />
            </div>
            <div class="tab-pane p-3" id="description-1" role="tabpanel">
              <RepairDescriptionComponent />
            </div>
            <div class="tab-pane p-3" id="cost-1" role="tabpanel">
              <RepairCostComponent />
            </div>
            <div class="tab-pane p-3" id="invoice-1" role="tabpanel">
              <RepairInvoiceComponent />
            </div>
            <div class="tab-pane p-3" id="service-1" role="tabpanel">
              <RepairHistoryComponent />
            </div>
            <div class="tab-pane p-3" id="repairrecords" role="tabpanel">
              <VehicleRepairsComponent />
            </div>
          </div>
        </div>

        <div class="card-body">
          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#accidentinfo"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-home"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Default</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a class="nav-link" data-toggle="tab" href="#goahead" role="tab">
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Description</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accidentbasic"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-envelope"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Basic</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accidentdetails"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Details</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accidentvor"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">VOR</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accidentcosts"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Costs</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#accidentrecords"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Accident Records</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active p-3" id="accidentinfo" role="tabpanel">
              <AccidentInfoComponent />
            </div>
            <div class="tab-pane p-3" id="goahead" role="tabpanel">
              <AccidentDescriptionComponent />
            </div>
            <div class="tab-pane p-3" id="accidentbasic" role="tabpanel">
              {/* <RepairCostComponent /> */}
            </div>
            <div class="tab-pane p-3" id="accidentdetails" role="tabpanel">
              {/* <RepairInvoiceComponent /> */}
            </div>
            <div class="tab-pane p-3" id="accidentvor" role="tabpanel">
              {/* <RepairHistoryComponent /> */}
            </div>
            <div class="tab-pane p-3" id="accidentcosts" role="tabpanel">
              {/* <VehicleRepairsComponent /> */}
            </div>
            <div class="tab-pane p-3" id="accidentrecords" role="tabpanel">
              {/* <VehicleRepairsComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
