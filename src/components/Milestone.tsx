import { useEffect, useState } from "react";
import { IMilestone } from "../App";
import './Milestone.css'
import { breakDownSeconds } from "../utils/date";

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
    // const totalMinutes = Math.floor(totalSeconds / 60);
    // const totalHours = Math.floor(totalMinutes / 60);
    // const totalDays = Math.floor(totalHours / 24);
    // const totalWeeks = Math.floor(totalDays / 7);

    const results = breakDownSeconds(totalSeconds)
    console.log('results', results)
    console.log('results seconds left', results['secondsLeft'])

    setSeconds(results['secondsLeft']);
    setMinutes(results['minutes']);
    setHours(results['hours']);
    setDays(results['days']);
    setWeeks(results['weeks']);
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