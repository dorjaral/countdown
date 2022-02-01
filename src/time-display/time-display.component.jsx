import React from 'react'
import './time-display.styles.css'

const TimeDisplay = ({ time, label }) => {
  return (
    <div className='time-display'>
      <p className='big-numbers'>{time}</p>
      <span>{label}</span>
    </div>
  )
}

export default TimeDisplay