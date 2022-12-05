import React from 'react'
import './components.css'

const Card = ({ cardData: { text } }) => {
  return (
    <div className='Card'>
        {/* <h2 className='title'>{title ? title : "Sample Title"}</h2> */}
        <p className="text">{text ? text : "Sample Text"}</p>
    </div>
  )
}

export default Card