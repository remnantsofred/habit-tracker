import './Form.css'

const Form = () => {
  return (
    <form action="" className="form">
      <h3>New milestone</h3>
      <div className='column left'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        
      </div>
      <div className='column left'>
        <label htmlFor="date">Date</label>
        <input type="datetime-local" name="date" id="date" />
      </div>
      <button>Add</button>
    </form>
  )
}

export default Form