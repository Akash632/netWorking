import React from 'react';
import './Navbar.css';
import { Link ,Navigate,useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav_body">
    <nav className="nav_Container">
        <div className="nav_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU" style={{width:'50px'}}/>
        <input type="text" placeholder='search'
        className="nav_input"
        />
        </div>
        <div className="nav_right">
            <h1>HI,ALPHA</h1>
            <h1 onClick={()=>{navigate("/home")}}>HOME</h1>
            <h1 onClick={()=>{navigate("/aboutus")}}>ABOUT US</h1>
            {/* <Link to="/aboutus">ABOUT US</Link> */}
            <h1 onClick={()=>{navigate("/profile")}}>PROFILE</h1>
            {/* <Link to="/profile">PROFILE</Link> */}
            <h1>DARK MODE </h1>
            <button className="nav_button">LOGOUT</button>
        </div>
    </nav>
    {/* <hr/> */}
    </div>
  );
}

export default Navbar;
