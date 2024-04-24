import React, { useState, useEffect} from "react";
import './Countdown.css'

const COUNTDOWN_TARGET = new Date("2024-05-23T18:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const weeks = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24 * 7) % 7);
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24) % 7);
  const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
  const seconds = Math.floor(totalTimeLeft / (1000) % 60);
  return { weeks, days, hours, minutes, seconds}
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(()=> getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(getTimeLeft())
      }, 1000)
    return ()=> {
      clearInterval(timer)
    }
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown until Weight Bearing</h2>
      <div className="content">
        {Object.entries(timeLeft).map(el => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
              <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          )
        })}
        {/* <div className="box">
          <div className="value">
          <span>{timeLeft.weeks}</span>
          </div>
          <span className="label">weeks</span>
        </div>
        <div className="box">
          <div className="value">
          <span>{timeLeft.days}</span>
          </div>
          <span className="label">days</span>
        </div>
        <div className="box">
          <div className="value">
          <span>{timeLeft.hours}</span>
          </div>
          <span className="label">hours</span>
        </div>
        <div className="box">
          <div className="value">
          <span>{timeLeft.minutes}</span>
          </div>
          <span className="label">minutes</span>
        </div>
        <div className="box">
          <div className="value">
          <span>{timeLeft.seconds}</span>
          </div>
          <span className="label">seconds</span>
        </div> */}
      </div>
      
      
    </div>
  )
}

export default Countdown