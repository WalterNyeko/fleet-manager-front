import React, { Component, Fragment } from "react";
import AllVeichlesComponent from "../../components/vehicles/AllVeichles";
import { connect } from "react-redux";
import { fetchVehicles } from "../../redux/actions/vehicles/FetchVehicles";
class AllVeichles extends Component {
  componentWillMount() {
    this.props.fetchVehicles();
  }
  render() {
    return (
      <Fragment>
        <AllVeichlesComponent vehicles={this.props.vehicles.vehicles} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  vehicles: state.vehicleReducer
});
export default connect(mapStateToProps, { fetchVehicles })(AllVeichles);
