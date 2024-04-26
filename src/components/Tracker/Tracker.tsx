import './Tracker.css';
import TrackerItem from './TrackerItem';

const dummyData = [
  {'date': '2024-04-22', 'reps': 16, 'manual': 4, 'scar': true, 'wysa': true},
  {'date': '2024-04-23', 'reps': 16, 'manual': 5, 'scar': true, 'wysa': true},
  {'date': '2024-04-24', 'reps': 16, 'manual': 5, 'scar': true, 'wysa': true},
  {'date': '2024-04-25', 'reps': 11, 'manual': 3, 'scar': true, 'wysa': true}
]

const Tracker = () => {
  return (
    <div className='tracker-page'>
      <h2>Tracker</h2>
      <ul>
        <div className='tracker-page-header row'>
          <div className="tracker-item-col">
            Date
          </div>
          <div className="tracker-item-col">
            Flexion
          </div>
          <div className="tracker-item-col">
            Manual
          </div>
          <div className="tracker-item-col">
            Scar
          </div>
          <div className="tracker-item-col">
            Wysa
          </div>
        </div>
        { dummyData.map((item, idx) => {
          return (
            <TrackerItem item={item} key={idx}/>
          )
        }) }
      </ul>
    </div>
  )
}

export default Tracker;