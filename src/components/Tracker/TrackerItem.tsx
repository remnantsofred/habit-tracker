import './Tracker.css'

const TrackerItem = ({item}) => {
  
  return (
    <div className="tracker-item-container row">
      <div className="tracker-item part-1">
        { item['date'] }
      </div>
      <input type="number" defaultValue={ item['reps'] }  className="tracker-item part-2">
      </input>
      <input type="number" defaultValue={ item['manual'] } className="tracker-item part-3">
      </input>
      <input type="checkbox" checked={ item['scar'] } className="tracker-item part-4">
      </input> 
      <input type="checkbox" checked={ item['wysa'] }className="tracker-item part-5">
      </input >
    </div>
  )
}

export default TrackerItem;