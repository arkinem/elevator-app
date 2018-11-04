import React from 'react';
import { connect } from 'react-redux';

const ElevatorCabin = (props) => (
  <div className="elevator-cabin" style={{
    marginTop: props.elevatorLocation === 1 ? '23px' : '223px'
  }}>
  </div>
);

const mapStateToProps = (state) => ({
  elevatorLocation: state.elevator.elevatorLocation
});

export default connect(mapStateToProps)(ElevatorCabin);
