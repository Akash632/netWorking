import React,{useState,useEffect} from "react";
import './Midbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StyleIcon from '@mui/icons-material/Style';

function Midbar() {
  const [value, setValue] = useState([]);

  async function apiCall(){
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    setValue(data.posts);
   // console.log(value);
  }
  useEffect(()=>{
    apiCall();
  },[value]);
 // value.map((datavalue)=>console.log(datavalue.title));
  return (
    <div>
      <div class="mid_search">
        <div className="post_search">
        <input type="text" placeholder="search"
        className="post_input"/>
        </div>
        <p>Photo</p>
      </div>
       {value.map((datavalue)=>(
        <div className="post_container">
          <div className="user_section">
            <AccountCircleIcon style={{fontSize: '45px',marginTop:'10px',marginRight:'5px'}}/>
        <h3>User Id: {datavalue.userId}</h3>
        </div>
        <h1>{datavalue.title}</h1>
        <p>{datavalue.body}</p>
        <hr/>
        <div className="comment_section">
          <div className="like_section">
          <ThumbUpIcon style={{marginTop:'14px',marginRight:'5px'}}/> 
          <p>{datavalue.reactions}</p>
          </div>
          <div className="tag_section">
            <StyleIcon style={{marginTop:'15px',marginRight:'5px'}}/>
           <p>{datavalue.tags}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Midbar;
