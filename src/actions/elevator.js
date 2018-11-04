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

export const requestGroundFloor = (state) => ({
  type: 'REQUEST_GROUND_FLOOR',
  groundFloorRequested: state
});

export const requestFirstFloor = (state) => ({
  type: 'REQUEST_FIRST_FLOOR',
  firstFloorRequested: state
});

export const elevatorMovingToFirst = () => ({
  type: 'ELEVATOR_MOVE_TO_FIRST',
  elevatorIsMoving: true
});

export const elevatorMovingToGround = () => ({
  type: 'ELEVATOR_MOVE_TO_GROUND',
  elevatorIsMoving: true
});

export const elevatorArrivedToFirst = () => ({
  type: 'ELEVATOR_ARRIVED_TO_FIRST',
  elevatorIsMoving: false,
  elevatorLocation: 1,
  firstFloorRequested: false
});

export const elevatorArrivedToGround = () => ({
  type: 'ELEVATOR_ARRIVED_TO_GROUND',
  elevatorIsMoving: false,
  elevatorLocation: 0,
  groundFloorRequested: false
});

export const setGroundFloorTimer = value => ({
  type: 'SET_GROUND_FLOOR_TIMER',
  groundFloorOpenTimer: value
});

export const setFirstFloorTimer = value => ({
  type: 'SET_FIRST_FLOOR_TIMER',
  firstFloorOpenTimer: value
});

const operateDoor = (
  dispatch,
  getState,
  openElevatorDoor,
  openFloorDoor,
  setDoorOpenTimer,
  closeFloorDoor,
  closeElevatorDoor,
  requestAnotherFloor,
  floorOpenTimer,
  anotherFloorRequested,
  anotherFloorRequest) => {
  dispatch(openFloorDoor());
  dispatch(openElevatorDoor());
  dispatch(setDoorOpenTimer(5));

  const myfunc03 = () => {
    dispatch(setDoorOpenTimer(floorOpenTimer() - 1));
    if (floorOpenTimer() <= 0) {
      dispatch(closeElevatorDoor());
      dispatch(closeFloorDoor());
      if (anotherFloorRequested()) {
        dispatch(requestAnotherFloor(true));
        anotherFloorRequest();
      }
    }
  };

  const myFunc01 = () => {
    myfunc03();
    setTimeout(function () {
      if (getState().elevator.elevatorDoorOpen) {
        myFunc01();
      }
    }, 1000);
  }

  myFunc01();
}


export const groundFloorRequest = () => {
  return (dispatch, getState) => {
    if (getState().elevator.elevatorLocation === 0) {
      if (!getState().elevator.elevatorDoorOpen) {
        if (getState().elevator.elevatorIsMoving) {
          dispatch(requestGroundFloor(true));
        } else {
          operateDoor(
            dispatch,
            getState,
            openElevatorDoor,
            openGroundFloorDoor,
            setGroundFloorTimer,
            closeElevatorDoor,
            closeGroundFloorDoor,
            requestFirstFloor,
            () => getState().elevator.groundFloorOpenTimer,
            () => getState().elevator.firstFloorRequested,
            firstFloorRequest
          );
        }
      } else {
        dispatch(setGroundFloorTimer(5));
      }
    }
    else { // location === 1
      if (getState().elevator.firstFloorDoorOpen) {
        if (getState().elevator.groundFloorRequested) {
          const myFunc01 = () => {
            groundFloorRequest();
            setTimeout(function () {
              if (getState().elevator.groundFloorRequested) {
                myFunc01();
              }
            }, 500);
          }

          myFunc01();
        } else {
          dispatch(requestGroundFloor(true));
        }
      } else {
        dispatch(elevatorMovingToGround());
        setTimeout(function () {
          dispatch(elevatorArrivedToGround());
          operateDoor(
            dispatch,
            getState,
            openElevatorDoor,
            openGroundFloorDoor,
            setGroundFloorTimer,
            closeElevatorDoor,
            closeGroundFloorDoor,
            requestFirstFloor,
            () => getState().elevator.groundFloorOpenTimer,
            () => getState().elevator.firstFloorRequested,
            firstFloorRequest
          );
        }, 2000);
      }
    }
  }
}

export const firstFloorRequest = () => {
  return (dispatch, getState) => {
    if (getState().elevator.elevatorLocation === 1) {
      if (!getState().elevator.elevatorDoorOpen) {
        if (getState().elevator.elevatorIsMoving) {
          dispatch(requestFirstFloor(true));
        } else {
          operateDoor(
            dispatch,
            getState,
            openElevatorDoor,
            openFirstFloorDoor,
            setFirstFloorTimer,
            closeElevatorDoor,
            closeFirstFloorDoor,
            requestGroundFloor,
            () => getState().elevator.firstFloorOpenTimer,
            () => getState().elevator.groundFloorRequested,
            groundFloorRequest
          );
        }
      } else {
        dispatch(setFirstFloorTimer(5));
      }
    }
    else { // location === 0
      if (getState().elevator.groundFloorDoorOpen) {
        if (getState().elevator.firstFloorRequested) {
          setTimeout(function () {
            firstFloorRequest();
          }, 500);
        } else {
          dispatch(requestFirstFloor(true));
        }
      } else {
        dispatch(elevatorMovingToFirst());
        setTimeout(function () {
          dispatch(elevatorArrivedToFirst());
          operateDoor(
            dispatch,
            getState,
            openElevatorDoor,
            openFirstFloorDoor,
            setFirstFloorTimer,
            closeElevatorDoor,
            closeFirstFloorDoor,
            requestGroundFloor,
            () => getState().elevator.firstFloorOpenTimer,
            () => getState().elevator.groundFloorRequested,
            groundFloorRequest
          );
        }, 2000);
      }
    }
  }
}