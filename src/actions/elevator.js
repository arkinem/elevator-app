export const openGroundFloorDoor = () => ({
  type: 'OPEN_GROUND_FLOOR_DOOR',
  groundFloorDoorOpen: true
});

export const closeGroundFloorDoor = () => ({
  type: 'CLOSE_GROUNND_FLOOR_DOOR',
  groundFloorDoorOpen: false
});

export const openFirstFloorDoor = () => ({
  type: 'OPEN_FIRST_FLOOR_DOOR',
  firstFloorDoorOpen: true
});

export const closeFirstFloorDoor = () => ({
  type: 'CLOSE_FIRST_FLOOR_DOOR',
  firstFloorDoorOpen: false
});

export const openElevatorDoor = () => ({
  type: 'OPEN_ELEVATOR_DOOR',
  elevatorDoorOpen: true
});

export const closeElevatorDoor = () => ({
  type: 'CLOSE_ELEVATOR_DOOR',
  elevatorDoorOpen: false
});