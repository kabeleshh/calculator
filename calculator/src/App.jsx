import { useState } from 'react'
import './App.css'
import Result from './Result'

function App() {
  const [count, setCount] = useState({});
  function handle(e){
    let name = e.target.name;
    let val = e.target.value;
    setCount((prev)=>{
      return {...prev,[name]:val};
    })
  }
  return (
    <>
      <div className='wrap'>
          <div>
            <h1>Calculator</h1>
          </div>
          <input type='text' id='num1' name='num1' onChange={handle} ></input><br/>
          <input type='text' id='num2' name='num2' onChange={handle} ></input><br/>
          <label>Select the operation to perform...<br/>
            <select name='operation' onChange={handle}>
              <option>select a operator</option>
              <option value='add'>+</option>
              <option value='sub'>-</option>
              <option value='mul'>*</option>
              <option value='div'>/</option>
            </select>
          </label>
          <Result {...count} />
      </div>
    </>
  )
}

export default App
