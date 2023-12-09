// import { useState } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
    // const [timer,setTimer] = useState({
    //     status:false,
    //     time:{
    //         hours:0,
    //         min:0,
    //         sec:0,
    //     }
    // })
    // const handleComplete = () =>{
    //     setTimer({
    //         status:false,
    //         time:{
    //             hours:0,
    //             min:0,
    //             sec:0,
    //         }
    //     })
    // }
    // const handleSubmitTimer =(e)=>{
    //     e.preventDefault();
    //     console.log("invoked")
    //     setTimer({...timer,status:true})
    // }
    // const handleChangeTime = (e) =>{
    //     setTimer({status:false,time:{...timer.time,[e.target.id]:e.target.value}})
    // }
    // const toHoursMin=(time)=>{
    //     const totalMin = Math.floor(time/60)
    //     const seconds= time %60
    //     const hours = Math.floor(totalMin/60)
    //     const minutes = totalMin % 60
    //     return `${hours}:${minutes}:${seconds}`
    // }
  return (
    <>
    
      <div className="timer-wrapper">
        
      {/* <CountdownCircleTimer
          isPlaying={timer.status}
          duration={timer.time.sec + timer.time.min *60 + timer.time.hours*60*60}
          colors="#A30000"
          
        >
            {({remainingTime})=>{
                <span style={{color:"white" , fontSize:"1.55rem"}}>
                    {toHoursMin(remainingTime)}
                </span>
            }}
        </CountdownCircleTimer>
        <form action="" onSubmit={handleSubmitTimer}>
            <div className="inputs-wrapper">
            <div className="hour-wrapper input-wrapper">
                <span>Hours</span>
            <input type="number" name="hours" id="hours" max={24} min={0} value={timer.time.hours} onChange={handleChangeTime}  />
            </div>
            <div className="min-wrapper input-wrapper">
                <span>Min</span>
                <input type="number" name="min" id="min" max={60} min={0} value={timer.time.min} onChange={handleChangeTime} />
            </div>
            <div className="sec-wrapper input-wrapper">
                <span>Sec</span>
                <input type="number" name="sec" id="sec" max={60} min={0} value={timer.time.sec} onChange={handleChangeTime} />
            </div>
            </div>
            
            <button id="status">Start</button>
        </form> */}
      </div>
    </>
  );
}
