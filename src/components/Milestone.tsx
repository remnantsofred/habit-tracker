import { useEffect, useState } from "react";
import { IMilestone } from "../App";
import './Milestone.css'

interface IProps {
  milestone: IMilestone
}

function Milestone (props: IProps) {
  const [status, setStatus] = useState();
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();
  const [weeks, setWeeks] = useState();

  useEffect(() => 
    getTimeDifference(props.milestone.date), 
  [])
  
  const getTimeDifference = (objDate:number) => {
    const now = Date.now();
    const laterDate = Math.max(now, objDate);
    const earlierDate = Math.min(now, objDate);

    laterDate === now ? setStatus('past') : setStatus('future');

    const diff = Math.floor(laterDate - earlierDate);
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    setSeconds(totalSeconds);
    setMinutes(totalMinutes);
    setHours(totalHours);
    setDays(totalDays);
    setWeeks(totalWeeks);
    // return totalSeconds;
    // return [ totalWeeks, totalDays, totalHours, totalMinutes, totalSeconds ]
  }

  return (
    <div className="column milestone">
      <span>
        { props.milestone.name }
      </span>
      { status === 'future' && 
        <span>
        in
        </span>}
      <span>
        { weeks > 0 && 
          <span>
            { weeks } weeks
          </span>
        }
        { days > 0 && 
          <span>
            { days } days
          </span>
        }
        { hours > 0 && 
          <span>
            { hours } hours
          </span>
        }
        { minutes > 0 && 
          <span>
            { minutes } minutes
          </span>
        }
        { seconds > 0 && 
          <span>
            { seconds } seconds
          </span>
        }
        
      </span>
      { status === 'past' && 
        <span>
        ago
        </span>}
    </div>
  )
}

export default Milestone;