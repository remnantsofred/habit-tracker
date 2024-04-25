import { useState } from 'react';
import './Navbar.css'

const Navbar = ({setPage}) => {
  const [button, setButton] = useState(0);

  const selectPage = (page) => {
    setPage(page);
    setButton(page);
  }

  return (
    <div className="row navbar-container">
      <option 
        className={ button === 0 ? 'selected navbar-item' : 'navbar-item' }
        onClick={() => selectPage(0)}
        >
        Milestones
      </option>
      <option 
        className={ button === 1 ? 'selected navbar-item' : 'navbar-item' }
        onClick={() => selectPage(1)}
        >
        Tracker
      </option>
      <option 
        className={ button === 2 ? 'selected navbar-item' : 'navbar-item' }
        onClick={() => selectPage(2)}
        >
        Form
      </option>
    </div>
  )
}

export default Navbar;