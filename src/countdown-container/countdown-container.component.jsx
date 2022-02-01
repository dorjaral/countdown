import React, {useState, useEffect} from 'react'
import TimeDisplay from '../time-display/time-display.component'

import './countdown-container.styles.css'

const CountdownContainer = ({ targetDate: { date, name } }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  
  const totalSeconds = (new Date(date) - currentTime) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60
  
  var data = {
    users: ['userNumberOne'],                   
    count: 0,
    reset: false
  };
  var user = data && Array.isArray(data.users) && data.users[0];
  console.log(user);
  
  return(
    <div className='countdown-container'>
        <div className="countdown-title">
          <h1>{name}</h1>
        </div>
        <div className="countdown-time">
          <TimeDisplay time={days} label={'days'} />
          <TimeDisplay time={hours} label={'hours'} />
          <TimeDisplay time={minutes} label={'minutes'} />
          <TimeDisplay time={seconds} label={'seconds'} />
        </div>
    </div>
  )
}

export default CountdownContainer