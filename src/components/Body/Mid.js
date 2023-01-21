import React from "react";
import Sidebar from '../Sidebar/Sidebar';
import Midbar from '../Midbar/Midbar';
import './Mid.css';
import Leftbar from "../Leftbar/Leftbar";

function Mid() {
  return (
    <div className="Mid_app">
      <Sidebar/>
     <Midbar/>
     <Leftbar/>
    </div>
  );
}

export default Mid;
