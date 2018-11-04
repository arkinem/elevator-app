import React from 'react';
import { connect } from 'react-redux';

const ElevatorCabinDoor = (props) => (
  <div className="elevator-cabin-door">
    <div className="elevator-cabin-door-unit" style={{
      marginLeft: props.elevatorDoorOpen ? "-60px" : 0,
      marginTop: props.elevatorLocation === 1 ? '23px' : '223px'
    }}></div>
    <div className="elevator-cabin-door-unit" style={{
      marginLeft: props.elevatorDoorOpen ? "115px" : "60px",
      marginTop: props.elevatorLocation === 1 ? '23px' : '223px'
    }}></div>
  </div>
);

const mapStateToProps = (state) => ({
  elevatorDoorOpen: state.elevator.elevatorDoorOpen,
  elevatorLocation: state.elevator.elevatorLocation
});

export default connect(mapStateToProps)(ElevatorCabinDoor);
