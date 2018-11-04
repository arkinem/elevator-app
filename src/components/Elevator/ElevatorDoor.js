import React from 'react';

const ElevatorDoor = (props) => (
  <div className="elevator-door" style={{ marginTop: props.marginTop + 'px' }}>
    <div className="elevator-door-unit"></div>
    <div className="elevator-door-unit"></div>
  </div>
);

export default ElevatorDoor;
