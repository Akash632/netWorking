import React from 'react';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className="side_main_container">
    <div className="sidebar">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      className="image"/>
      <p>Alpha User</p>
      <p>alpha@gmail.com</p>
      <hr/>
    <div className="view_container">
            <p>Who viewed you 2,300</p>
            <p>Who viewed you 2,300</p>
    </div>
    </div>
    <div className="side_down">
        <p>Recent</p>
        <ul>
            <li>reactJs</li>
            <li>programming</li>
            <li>softwareengineering</li>
            <li>design</li>
            <li>developer</li>
        </ul>
    </div>
    </div>
  );
}

export default Sidebar;
