import { useNavigate } from "react-router-dom";
import Row from "./Row";
import { useEffect } from "react";


export default function BrowsePage() {
    const data= JSON.parse(localStorage.getItem("userData"))
    const navigate = useNavigate()
    useEffect(()=>{
        if(!(data && ("categories" in data))){
            navigate("/register")
        }
    },[])
    const handleProfileBtn = () =>{
        navigate("/homepage")
    }
  return (
    <div className="browse-page">
      <div className="browse-header">
        <h1>SUPER APP</h1>
        <button className="profile-btn" onClick={handleProfileBtn}></button>
      </div>
      {
        data&&data.categories.map((ele,index)=>(
            <>
            <Row category={ele} key={index}/>
            </>
        ))
      }
      
    </div>
  );
}
