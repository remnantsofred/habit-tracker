import './Tracker.css'

const TrackerItem = ({item}) => {
  
  return (
    <div className="tracker-item-container row">
      <div className="tracker-item-col">
        { item['date'] }
      </div>
      <div className="tracker-item-col">
        <input type="number" defaultValue={ item['reps'] }  className="tracker-item part-2">
        </input>
      </div>
      <div className="tracker-item-col">
        <input type="number" defaultValue={ item['manual'] } className="tracker-item part-3">
        </input>
      </div>
      <div className="tracker-item-col">
        <input type="checkbox" checked={ item['scar'] } className="tracker-item part-4">
        </input> 
      </div>
      <div className="tracker-item-col">
        <input type="checkbox" checked={ item['wysa'] }className="tracker-item part-5">
        </input >
      </div>
    </div>
  )
}

export default TrackerItem;