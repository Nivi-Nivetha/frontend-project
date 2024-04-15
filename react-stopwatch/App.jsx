import { useState, useEffect, useRef } from "react";
import './App.css'

function App() {
  const [time, setTime] = useState(0);

  useEffect(()=>{
    handelTime();
  return () => clearInterval(id.current);
  }, [])

let id = useRef();

function handelTime(){
    id.current = setInterval(() =>{
       setTime((prev)=> prev + 1);
  }, 2000)
}
 

  return (
    <div>
      <div className="header"> 
      <h1> StopWatch </h1>
      <button className="btn1"
      onClick={() => handelTime()}
      > Start </button>
      <button className="btn2"
      onClick={ () =>  clearInterval(id.current)}
      > Pause </button>
      <button className="btn3"
      onClick={ () => {
         clearInterval(id.current)
         setTime(0);
        }}
      > Reset </button>
       <h1> {time} </h1>
        </div>
    </div>
  );
}

export default App;
