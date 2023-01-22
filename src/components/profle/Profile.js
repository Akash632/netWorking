import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile_body">
    <div className="profile_container">
        <div className="input_class">
      <input type="text"placeholder="Username"/>
      <button>SAVE</button>
      </div>
      <div className="input_class">
      <input type="text" placeholder="Password"/>
      <button>SAVE</button>
      </div>
      <button className="nav_button">DELETE YOUR ACCOUNT</button>
    </div>
    </div>
  );
}

export default Profile;
