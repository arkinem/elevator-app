import React from 'react';
import { connect } from 'react-redux';
import { openElevatorDoor, closeElevatorDoor } from '../actions/elevator';


const ControlPanel = (props) => (
  <div className="control-panel">
    <div className="control-panel-display">
      <span>{props.elevatorLocation}</span>
    </div>

    <div className="control-panel-button" onClick={props.openElevatorDoor}>
      <span>1</span>
    </div>

    <div className="control-panel-button" onClick={props.closeElevatorDoor}>
      <span>0</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  elevatorLocation: state.elevator.elevatorLocation
});

const mapDispatchToProps = (dispatch) => ({
  openElevatorDoor: () => dispatch(openElevatorDoor()),
  closeElevatorDoor: () => dispatch(closeElevatorDoor())
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

