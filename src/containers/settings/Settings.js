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
