import React from 'react'
import './FlagCard.css'

const FlagCard = ({ country, handleClick }) => {
  return (
    <div className='img_wrp' onClick={() => handleClick(country)}>
      <img src={country.flags.svg} alt={country.name.common} />
    </div>
  )
}

export default FlagCard
