import React from 'react';
import { connect } from 'react-redux';

const ElevatorCabinDoor = (props) => (
  <div className="elevator-cabin-door">
    <div className="elevator-cabin-door-unit" style={{
      marginLeft: props.elevatorDoorOpen ? "-60px" : 0
    }}></div>
    <div className="elevator-cabin-door-unit" style={{
      marginLeft: props.elevatorDoorOpen ? "115px" : "60px"
    }}></div>
  </div>
);

const mapStateToProps = (state) => ({
  elevatorDoorOpen: state.elevator.elevatorDoorOpen
});

export default connect(mapStateToProps)(ElevatorCabinDoor);
