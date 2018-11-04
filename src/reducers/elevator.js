// Elevator Reducer

const elevatorReducerDefaultState = {
  elevatorIsMoving: false,
  elevatorLocation: 0,
  groundFloorDoorOpen: false,
  firstFloorDoorOpen: false,
  elevatorDoorOpen: false
};

export default (state = elevatorReducerDefaultState, action) => {
  switch (action.type) {
    case 'OPEN_GROUND_FLOOR_DOOR':
      return {
        ...state,
        groundFloorDoorOpen: action.groundFloorDoorOpen
      };
    case 'CLOSE_GROUNND_FLOOR_DOOR':
      return {
        ...state,
        groundFloorDoorOpen: action.groundFloorDoorOpen
      };
    case 'OPEN_FIRST_FLOOR_DOOR':
      return {
        ...state,
        firstFloorDoorOpen: action.firstFloorDoorOpen
      };
    case 'CLOSE_FIRST_FLOOR_DOOR':
      return {
        ...state,
        firstFloorDoorOpen: action.firstFloorDoorOpen
      };
    case 'OPEN_ELEVATOR_DOOR':
      return {
        ...state,
        elevatorDoorOpen: action.elevatorDoorOpen
      };
    case 'CLOSE_ELEVATOR_DOOR':
      return {
        ...state,
        elevatorDoorOpen: action.elevatorDoorOpen
      };
    default:
      return state;
  }
};
