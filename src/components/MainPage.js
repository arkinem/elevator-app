import React from 'react';
import ControlPanel from './ControlPanel';
import Elevator from './Elevator/Elevator';


const MainPage = () => (
  <div className="main-page">
    <div className="main-container">
      <ControlPanel />
      <Elevator />
    </div>
  </div >
);

export default MainPage;
