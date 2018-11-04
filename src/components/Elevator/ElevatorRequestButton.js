import React from 'react';
import { connect } from 'react-redux';
import { firstFloorRequest, groundFloorRequest } from '../../actions/elevator';


const ElevatorRequestButton = (props) => (
  <div className="elevator-request-button-container" style={{ marginTop: props.marginTop + 'px' }}>
    <div className="elevator-request-button" onClick={
      () => { props.floor === 0 ? props.groundFloorRequest() : props.firstFloorRequest() }
    }></div>
  </div>
);

/*

if

elevator is not moving
elevator is on correct floor
elevator door are closed
floor foor are closed

*/

const mapDispatchToProps = (dispatch) => ({
  groundFloorRequest: () => dispatch(groundFloorRequest()),
  firstFloorRequest: () => dispatch(firstFloorRequest())
});

export default connect(undefined, mapDispatchToProps)(ElevatorRequestButton);
