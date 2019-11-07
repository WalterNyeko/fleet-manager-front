import React, { Component, Fragment } from "react";
import VehicleTyresComponent from "../../components/vehicletyre/VehcleTyres";

class VehicleTyres extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <VehicleTyresComponent/>
            </Fragment>
         );
    }
}
 
export default VehicleTyres;