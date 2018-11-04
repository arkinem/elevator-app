// Elevator Reducer

//ground requested
//first requested
const elevatorReducerDefaultState = {
  elevatorIsMoving: false,
  elevatorLocation: 0,
  groundFloorDoorOpen: false,
  firstFloorDoorOpen: false,
  elevatorDoorOpen: false,
  groundFloorOpenTimer: 0,
  firstFloorOpenTimer: 0,
  groundFloorRequested: false,
  firstFloorRequested: false,
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
    case 'REQUEST_GROUND_FLOOR':
      return {
        ...state,
        groundFloorRequested: action.groundFloorRequested
      };
    case 'REQUEST_FIRST_FLOOR':
      return {
        ...state,
        firstFloorRequested: action.firstFloorRequested
      };
    case 'ELEVATOR_MOVE_TO_FIRST':
      return {
        ...state,
        elevatorIsMoving: action.elevatorIsMoving
      };
    case 'ELEVATOR_MOVE_TO_GROUND':
      return {
        ...state,
        elevatorIsMoving: action.elevatorIsMoving
      };
    case 'ELEVATOR_ARRIVED_TO_FIRST':
      return {
        ...state,
        elevatorIsMoving: action.elevatorIsMoving,
        elevatorLocation: action.elevatorLocation
      };
    case 'ELEVATOR_ARRIVED_TO_GROUND':
      return {
        ...state,
        elevatorIsMoving: action.elevatorIsMoving,
        elevatorLocation: action.elevatorLocation
      };
    case 'SET_GROUND_FLOOR_TIMER':
      return {
        ...state,
        groundFloorOpenTimer: action.groundFloorOpenTimer
      };
    case 'SET_FIRST_FLOOR_TIMER':
      return {
        ...state,
        firstFloorOpenTimer: action.firstFloorOpenTimer
      };
    default:
      return state;
  }
};