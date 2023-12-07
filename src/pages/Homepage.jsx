import { useNavigate } from "react-router-dom";
import NewsCard from "../components/homepage/NewsCard";
import Notes from "../components/homepage/Notes";
import ProfileCard from "../components/homepage/ProfileCard";
import Timer from "../components/homepage/Timer";
import WeatherDate from "../components/homepage/WeatherDate";

export default function Homepage() {
  const navigate = useNavigate()
  const handleBrowseBtn = () =>{
    navigate("/browse")
  }
  return (
    <>
      <div className="homepage-wrapper">
        <div className="left-div-wrapper">
          <div className="left-div">
            <ProfileCard />
            <WeatherDate />
          </div>
          <Notes />
          <Timer />
        </div>
        
        <NewsCard />
        <button className="browse-btn" onClick={handleBrowseBtn}>Browse</button>
      </div>
    </>
  );
}
