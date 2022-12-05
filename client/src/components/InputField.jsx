import React, { useState, useRef } from 'react'
import './components.css'

const InputField = ({ handleSubmit }) => {

  const inputRef = useRef(null)

  const middleMan = event => {
    if (event.key === "Enter") {
        handleSubmit(inputRef.current.value)
        inputRef.current.value = ""
    }
  }

  return (
    <div className='InputField'>
        <input type="text" className="answer" ref={inputRef} onKeyDown={event => middleMan(event)} />
        {/* <input type="button" value="Enter" onClick={handleSubmit} /> */}
    </div>
  )
}

export default InputField