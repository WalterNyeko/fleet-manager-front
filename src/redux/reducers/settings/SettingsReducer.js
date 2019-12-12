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
  vehiclecostcenter: []
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
    default:
      return state;
  }
};
