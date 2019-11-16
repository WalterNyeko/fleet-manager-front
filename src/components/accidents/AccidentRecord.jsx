import React from "react";

export default function AccidentRecord() {
  return (
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h4 class="mt-0 header-title">Veichle Accidents</h4>
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
                <th>Registration No.</th>
                <th>Accident Status</th>
                <th>Registration No.</th>
                <th>Extra Registration No.</th>
                <th>Third Party Involved</th>
                <th>Total Cost (Net)</th>
                <th>Accident Date</th>
                <th>Driver Name</th>
                <th>Make Code</th>
                <th>Model Code</th>
                <th>Division/Client</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>Accident Date</td>
                <td>Driver Name</td>
                <td>Make Code</td>
                <td>Model Code</td>
                <td>Division/Client</td>
                <td>Comment</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
                <td>Accident Date</td>
                <td>Driver Name</td>
                <td>Make Code</td>
                <td>Model Code</td>
                <td>Division/Client</td>
                <td>Comment</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
                <td>Accident Date</td>
                <td>Driver Name</td>
                <td>Make Code</td>
                <td>Model Code</td>
                <td>Division/Client</td>
                <td>Comment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
