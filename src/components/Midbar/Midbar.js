import React,{useState,useEffect} from "react";
import './Midbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StyleIcon from '@mui/icons-material/Style';
import ModeIcon from '@mui/icons-material/Mode';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function Midbar() {
  const [value, setValue] = useState([]);
  const[text,setText]=useState("");
  const[click,setClick]=useState(false);

  function imageLiked(){
    setClick(!click);
  };

  async function apiCall(){
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    setValue(data.posts);
  }
  useEffect(()=>{
    apiCall();
  },[]);

  function addPost(){
    const arrayCopy=value;
    arrayCopy.unshift({
        userId:1,
        name:"Akash",
        body:text,
        tags:["html,css"]
      });
    setValue(arrayCopy);
    setText("");
  }

  // console.log(text);
 // value.map((datavalue)=>console.log(datavalue.title));
  return (
    <div>
      <div class="mid_search">
        <div className="post_search">
          <ModeIcon style={{marginTop:'6px'}}/>
        <input type="text"
        value={text}
        className="post_input" onChange={(event)=>setText(event.target.value)}/>
        <button onClick={addPost}>Post</button>
        </div>
        <div className="add_button">
          <AddPhotoAlternateIcon style={{fontsize:"30px",margin:"14px"}}/>
        <p>Photo</p>
        </div>
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
          <div className="like_section" onClick={imageLiked}>
          {click?<ThumbUpIcon style={{marginTop:'14px',marginRight:'5px'}}/> :<ThumbUpOffAltIcon style={{marginTop:'14px',marginRight:'5px'}}/> }
          <p>{click?datavalue.reactions+1:datavalue.reactions}</p>
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
