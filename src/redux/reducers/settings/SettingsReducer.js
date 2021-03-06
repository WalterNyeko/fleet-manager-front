const initialState = {
  vehiclebodytypes: [],
  vehiclestatus: [],
  vehicletyres: [],
  vehiclereturnedworkshop: [],
  vehiclemakecode: [],
  vehiclemodelcode: [],
  vehiclecompanycode: [],
  vehiclefueltype: [],
  vehiclecountry: [],
  vehiclecostcenter: [],
  vehicleclient: [],
  vehicleconventiontype: [],
  vehiclelocationcode: [],
  vehiclecounty: [],
  vehiclecurrencycodes: [],
  vehicleinpull: [],
  vehiclegearbox: [],
  vehicledeductability: [],
  vehicleinsurancecompany: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "vehiclebodytypes":
      return {
        ...state,
        vehiclebodytypes: action.payload
      };
    case "vehiclereturnedworkshop":
      return {
        ...state,
        vehiclereturnedworkshop: action.payload
      };
    case "vehicletyres":
      return {
        ...state,
        vehicletyres: action.payload
      };
    case "vehiclemakecode":
      return {
        ...state,
        vehiclemakecode: action.payload
      };
    case "vehiclemodelcode":
      return {
        ...state,
        vehiclemodelcode: action.payload
      };
    case "vehiclecompanycode":
      return {
        ...state,
        vehiclecompanycode: action.payload
      };
    case "vehiclestatus":
      return {
        ...state,
        vehiclestatus: action.payload
      };
    case "vehiclefueltype":
      return {
        ...state,
        vehiclefueltype: action.payload
      };
    case "vehiclecounty":
      return {
        ...state,
        vehiclecounty: action.payload
      };
    case "vehiclecostcenter":
      return {
        ...state,
        vehiclecostcenter: action.payload
      };
    case "vehicleclient":
      return {
        ...state,
        vehicleclient: action.payload
      };
    case "vehicleconventiontype":
      return {
        ...state,
        vehicleconventiontype: action.payload
      };
    case "vehiclelocationcode":
      return {
        ...state,
        vehiclelocationcode: action.payload
      };
    case "vehiclecountry":
      return {
        ...state,
        vehiclecountry: action.payload
      };
    case "vehiclecurrencycodes":
      return {
        ...state,
        vehiclecurrencycodes: action.payload
      };
    case "vehicleinpull":
      return {
        ...state,
        vehicleinpull: action.payload
      };
    case "vehiclegearbox":
      return {
        ...state,
        vehiclegearbox: action.payload
      };
    case "vehicledeductability":
      return {
        ...state,
        vehicledeductability: action.payload
      };

    case "vehicleinsurancecompany":
      return {
        ...state,
        vehicleinsurancecompany: action.payload
      };
    default:
      return state;
  }
};
