import React from 'react';
import ElevatorGround from './ElevatorGround';
import ElevatorCabin from './ElevatorCabin';
import ElevatorDoor from './ElevatorDoor';
import ElevatorRequestButton from './ElevatorRequestButton';
import ElevatorCabinDoor from './ElevatorCabinDoor';

const Elevator = () => (
  <div className="elevator-container">
    <ElevatorRequestButton marginTop={65} floor={1} />
    <ElevatorDoor floor={1} />
    <ElevatorCabinDoor />
    <ElevatorCabin />
    <ElevatorGround />
    <ElevatorRequestButton marginTop={265} floor={0} />
    <ElevatorDoor floor={0} />
  </div>
);

export default Elevator;
