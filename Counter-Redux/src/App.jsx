import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByValue, decrementByValue} from "./features/countSlice"
function App() {
  //const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {number} = useSelector(state => state.count); 

  return (
  <div className='App'>
    <h1>Counter</h1>
    <h2>{number}</h2>
    <div className= 'btns'>
      <button onClick={() => dispatch(increment())}>INCR</button>
      <button onClick={() => dispatch(decrement())}>DECR</button>
      <button onClick={() => dispatch(incrementByValue(10))}>INCR BY SOME VALUE</button>
      <button onClick={() => dispatch(decrementByValue(10))}>DECR BY SOME VALUE</button>
    </div>

  </div>  
  );
}

export default App
