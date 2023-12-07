import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
    const [timer,setTimer] = useState({
        status:false,
        time:{
            hours:0,
            min:0,
            sec:0,
        }
    })
    const handleComplete = () =>{
        setTimer({
            status:false,
            time:{
                hours:null,
                min:null,
                sec:null,
            }
        })
    }
    const handleSubmitTimer =(e)=>{
        e.preventDefault();
        setTimer({...timer,status:true})
    }
    const handleChangeTime = (e) =>{
        setTimer({status:false,time:{...timer.time,[e.target.id]:e.target.value}})
    }
  return (
    <>
    
      <div className="timer-wrapper">
        
      <CountdownCircleTimer
          isPlaying={timer.status}
          duration={timer.time.sec}
          colors="#A30000"
          onComplete={()=>{
            handleComplete();
            return {shouldRepeat:true,newInitialRemainingTime:timer.time.status}
          }}
        ></CountdownCircleTimer>
        <form action="" onSubmit={handleSubmitTimer}>
            <div className="inputs-wrapper">
            <div className="hour-wrapper input-wrapper">
                <span>Hours</span>
            <input type="number" name="hours" id="hours" max={24} min={0} onChange={handleChangeTime}  />
            </div>
            <div className="min-wrapper input-wrapper">
                <span>Min</span>
                <input type="number" name="min" id="min" max={60} min={0} onChange={handleChangeTime} />
            </div>
            <div className="sec-wrapper input-wrapper">
                <span>Sec</span>
                <input type="number" name="sec" id="sec" max={60} min={0} onChange={handleChangeTime} value={timer.time.sec} />
            </div>
            </div>
            
            <button id="status">Start</button>
        </form>
      </div>
    </>
  );
}
