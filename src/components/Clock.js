import React, {useState, useEffect} from 'react'

function Clock() {
    const[clock,setclock] = useState();
    useEffect(() => {
        setInterval(() =>{
        const date = new Date();
        setclock(date.toLocaleTimeString());
    },1000);
},[]);
  return (

    <div className='clock-main'>

    <div className="clock-container">{clock}</div>
    
    </div>
    )
}
export default Clock