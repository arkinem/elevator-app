import React from 'react';
import { connect } from 'react-redux';

const ElevatorDoor = (props) => (
  <div className="elevator-door" style={{ marginTop: props.floor === 1 ? '13px' : '213px' }}>
    <div className="elevator-door-unit" style={{
      marginLeft: (props.floor === 0 && props.groundFloorDoorOpen)
        || (props.floor === 1 && props.firstFloorDoorOpen) ? "-70px" : 0
    }}></div>
    <div className="elevator-door-unit" style={{
      marginLeft: (props.floor === 0 && props.groundFloorDoorOpen)
        || (props.floor === 1 && props.firstFloorDoorOpen) ? "140px" : "70px"
    }}></div>
  </div>
);

const mapStateToProps = (state) => ({
  groundFloorDoorOpen: state.elevator.groundFloorDoorOpen,
  firstFloorDoorOpen: state.elevator.firstFloorDoorOpen

});

export default connect(mapStateToProps)(ElevatorDoor);
