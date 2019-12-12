import React, { Component } from "react";
import { connect } from "react-redux";
import SettingsComponent from "../../components/settings/Settings";
import { addSettings } from "../../redux/actions/settings/settings";

class Settings extends Component {
  state = {
    settingsItems: [
      {
        id: 1,
        name: "Workshops",
        dbColumn: "returned_workshop_name",
        urlTag: "vehiclereturnedworkshop"
      },
      {
        id: 2,
        name: "Vehicle Status",
        dbColumn: "status_name",
        urlTag: "vehiclestatus"
      },
      {
        id: 3,
        name: "Vehicle Tyre",
        dbColumn: "tyre_name",
        urlTag: "vehicletyres"
      },
      {
        id: 4,
        name: "Vehicle Body Type",
        dbColumn: "body_type_name",
        urlTag: "vehiclebodytypes"
      },
      {
        id: 5,
        name: "Vehicle Modal Code",
        dbColumn: "model_code_name",
        urlTag: "vehiclemodelcode"
      },
      {
        id: 6,
        name: "Vehicle Make Code",
        dbColumn: "make_code_name",
        urlTag: "vehiclemakecode"
      },
      {
        id: 7,
        name: "Vehicle Company Code",
        dbColumn: "company_code_name",
        urlTag: "vehiclecompanycode"
      },
      {
        id: 8,
        name: "Vehicle Fuel Type",
        dbColumn: "fuel_type_name",
        urlTag: "vehiclefueltype"
      },
      {
        id: 9,
        name: "Vehicle County",
        dbColumn: "county_name",
        urlTag: "vehiclecounty"
      },
      {
        id: 10,
        name: "Vehicle Cost Center",
        dbColumn: "cost_center_name",
        urlTag: "vehiclecostcenter"
      },
      {
        id: 11,
        name: "Vehicle Client",
        dbColumn: "client_name",
        urlTag: "vehicleclient"
      },
      {
        id: 12,
        name: "Vehicle Convention Type",
        dbColumn: "convention_type_name",
        urlTag: "vehicleconventiontype"
      },
      {
        id: 13,
        name: "Vehicle Location Code",
        dbColumn: "location_code_name",
        urlTag: "vehiclelocationcode"
      },
      {
        id: 14,
        name: "Vehicle Country",
        dbColumn: "country_name",
        urlTag: "vehiclecountry"
      },
      {
        id: 15,
        name: "Vehicle Currency Code",
        dbColumn: "currency_codes_name",
        urlTag: "vehiclecurrencycodes"
      },
      {
        id: 16,
        name: "Vehicle In Pull",
        dbColumn: "in_pull_name",
        urlTag: "vehicleinpull"
      },
      {
        id: 17,
        name: "Vehicle Gear Box",
        dbColumn: "gear_box_name",
        urlTag: "vehiclegearbox"
      }
    ],
    selectedSettingsItem: "",
    settingsValue: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { settingsItems, selectedSettingsItem, settingsValue } = this.state;
    const { addSettings } = this.props;
    const theSelectedItem = settingsItems.filter(
      ({ name }) => name === selectedSettingsItem
    )[0];
    const { dbColumn, urlTag } = theSelectedItem;
    const data = {
      [dbColumn]: settingsValue
    };
    addSettings(data, urlTag);
  };

  render() {
    return (
      <div>
        <SettingsComponent
          onChange={this.onChange}
          state={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default connect(null, { addSettings })(Settings);
