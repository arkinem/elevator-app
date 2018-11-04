import React from 'react';

const ElevatorRequestButton = (props) => (
  <div className="elevator-request-button-container" style={{ marginTop: props.marginTop + 'px' }}>
    <div className="elevator-request-button"></div>
  </div>
);

/*

if

elevator is not moving
elevator is on correct floor
elevator door are closed
floor foor are closed

*/

export default ElevatorRequestButton;
