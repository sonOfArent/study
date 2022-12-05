import React from 'react'

const Outcome = ({ outcome }) => {
    
  if (outcome !== true && outcome !== false) return null

  console.log(outcome)

  const toSet = outcome === true ? "correct" : "incorrect"

  return (
    <h2 className={`Outcome ${toSet}`}>
      {outcome ? toSet : "Try again!"}
    </h2>
  )
}

export default Outcome