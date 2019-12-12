import React from "react";

export default function Settings({
  onChange,
  state: { settingsItems, selectedSettingsItem, settingsValue },
  handleSubmit
}) {
  return (
    <div className="row mt-5 pt-5 add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10 row">
        <div className="form-group col-md-4">
          <label>Select Settings Item</label>
          <select
            className="browser-default custom-select"
            name="selectedSettingsItem"
            value={selectedSettingsItem}
            onChange={onChange}
          >
            <option>Select Settings Item</option>
            {settingsItems &&
              settingsItems.map(({ id, name }) => (
                <option key={id}>{name}</option>
              ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Settings Value</label>{" "}
          <input
            type="text"
            className="form-control"
            required
            placeholder=""
            name="settingsValue"
            onChange={onChange}
            value={settingsValue}
          />
        </div>
        <div className="form-group col-md-4">
          <label></label>{" "}
          <div className="btn btn-primary btn-block" onClick={handleSubmit}>
            Save Value
          </div>
        </div>
      </div>
    </div>
  );
}
