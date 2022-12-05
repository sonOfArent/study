import React, { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card'
import InputField from './components/InputField'
import Outcome from './components/Outcome'

import { pairs } from '../src/assets/data.js'

const [english, spanish] = pairs[Math.floor(Math.random() * pairs.length)]

const App = () => {

  const handleSubmit = guess => {
    if (guess === answer) {
      setOutcome(true)
      const [english, spanish] = pairs[Math.floor(Math.random() * pairs.length)]
      setCardData({ ...cardData, text: spanish })
      setAnswer(english)
    }
    else {
      setOutcome(false)
    }
  }

  const [answer, setAnswer] = useState("")
  const [outcome, setOutcome] = useState("")
  const [cardData, setCardData] = useState({
    title: "",
    text: ""
  })

  useEffect(() => {
    console.log(english, spanish)
    setCardData({ ...cardData, text: spanish })
    setAnswer(english)
  }, [])

  return (
    <div className='App'>
      <div className="one">
        <Outcome outcome={outcome}/>
      </div>
      <div className="two">
        <Card cardData={cardData}/>
      </div>
      <div className="three">
        <InputField handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default App