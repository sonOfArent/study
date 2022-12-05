import React from 'react'
import './components.css'

const Card = ({ cardData: { text } }) => {
  return (
    <div className='Card'>
        <p className="text">{text ? text : "Sample Text"}</p>
    </div>
  )
}

export default Card