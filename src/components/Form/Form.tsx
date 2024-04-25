import './Form.css'

const Form = () => {
  return (
    <form action="" className="form">
      <h3>Add milestone</h3>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="date">Date</label>
      <input type="datetime-local" name="date" id="date" />
      
      <button>Submit</button>
    </form>
  )
}

export default Form