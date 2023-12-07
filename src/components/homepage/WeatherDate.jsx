import { useEffect, useState } from "react";
import pressure from "../../assets/icons/pressure.svg"
import wind from "../../assets/icons/wind.svg"
import humidity from "../../assets/icons/humidity.svg"
import axios from "axios";
const DataCard = ({icon,data,name}) => {
  return (
    <div className="datacard-wrapper">
      <div className="icon" >
        <img src={icon} alt="" />
      </div>
      <div className="data-wrapper">
        <p className="data-units">{data}</p>
        <p className="data-name">{name}</p>
      </div>
    </div>
  );
};

export default function WeatherDate() {
    const [weatherData,setWeatherData] = useState()
    const fetchData = async () =>{
        const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=89e366586c3a46528d1144000232609&q=anantapur&aqi=no",{mode:"cors"})
        setWeatherData(response.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
    const formatAMPM = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();    
      const ampm = hours >= 12 ? 'PM' : 'AM';
    
      hours %= 12;
      hours = hours || 12;    
      minutes = minutes < 10 ? `0${minutes}` : minutes;
    
      const strTime = `${hours}:${minutes} ${ampm}`;
    
      return strTime;
    };
    let nowDate = new Date().toISOString().split('T')[0];
    let nowTime = formatAMPM(new Date())
  return (
    <>
      {weatherData && <div className="weather-wrapper">
        <div className="date-time">
          <span>{nowDate}</span>
          <span>{nowTime}</span>
        </div>
        <div className="bottom-weather-wrapper">
          <div className="weather-forcast-wrapper">
            <div className="weather-icon">
                <img src={weatherData.current.condition.icon} alt="" />
            </div>
            <p>{weatherData.current.condition.text}</p>
          </div>
          <div className="temp-pressure-wrapper">
            <p className="temp">24 C</p>
            <DataCard icon={pressure} data={weatherData.current.pressure_mb+" mbar"} name="Pressure"  />
          </div>
          <div>
          <DataCard icon={wind} data={weatherData.current.wind_kph+" kph"} name="Wind" />
          <DataCard icon={humidity} data={weatherData.current.humidity+" %"} name="Humidity"/>
          </div>
        </div>
      </div>}
    </>
  );
}
