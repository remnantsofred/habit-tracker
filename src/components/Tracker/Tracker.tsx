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
      <div className='tracker-page-header row'>
        <div>
          Date
        </div>
        <div>
          Flexion
        </div>
        <div>
          Manual
        </div>
        <div>
          Scar
        </div>
        <div>
          Wysa
        </div>
      </div>
      <ul>
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