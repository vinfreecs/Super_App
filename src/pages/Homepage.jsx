import NewsCard from "../components/homepage/NewsCard";
import ProfileCard from "../components/homepage/ProfileCard";
import WeatherDate from "../components/homepage/WeatherDate";

export default function Homepage() {
  return (
    <>
      <div className="homepage-wrapper">
        <div className="left-div">
          <ProfileCard />
          <WeatherDate />
        </div>

        <NewsCard />
      </div>
    </>
  );
}
