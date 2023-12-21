import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
// import Button from './Button';
import React,{ useState } from 'react';

function App() {

  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const [inter,setInter]=useState();

  var updateMs=time.ms,updateM=time.m,updateS=time.s,updateH=time.h;

  const start=()=>{
    run();
    setInter(setInterval(run, 10))
  }

  const stop=()=>{
      clearInterval(inter)
  }

  const run=()=>{
    if(updateM === 60){
      updateH++;
      updateM = 0;
    }

    if(updateS === 60){
      updateM++;
      updateS = 0;
    }

    if(updateMs === 100){
      updateS++;
      updateMs=0;
    }

    updateMs++;

    return setTime({ms:updateMs,m:updateM,s:updateS,h:updateH})

  }

  return (
    <div className="App">
      <Timer time={time} start={start} stop={stop}/>
      {/* <Button start={start} stop={stop}/> */}
    </div>
  );
}

export default App;
