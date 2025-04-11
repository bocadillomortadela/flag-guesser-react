import './GuessCountry.css'
import React, { useEffect, useState } from 'react'
import { getRandom } from '../../utils/random.js'
import FlagCard from '../../components/FlagCard/FlagCard.jsx'
import { Link } from 'react-router-dom'

const GuessCountry = () => {
  const [countries, setCountries] = useState([])
  const [flags, setFlags] = useState([])
  const [correctCountry, setCorrectCountry] = useState(null)
  const [points, setPoints] = useState(0)
  const [level, setLevel] = useState(1)
  console.log('Estado inicial de countries:', countries)

  const generateNewFlags = (list) => {
    const selection = getRandom(list)
    const currentCountry = list[selection]
    setCorrectCountry(currentCountry)

    const newRandomFlags = [currentCountry]

    while (newRandomFlags.length < 3) {
      const randomIndex = getRandom(list)
      const randomCountry = list[randomIndex]

      if (!newRandomFlags.includes(randomCountry)) {
        newRandomFlags.push(randomCountry)
      }
    }
    newRandomFlags.sort(() => Math.random() - 0.5)
    setFlags(newRandomFlags)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((res) => res.json())
      .then((res) => {
        console.log('Datos recibidos:', res)
        setCountries(res)
        generateNewFlags(res)
      })
      .catch((error) => console.error('Error en la API:', error))
  }, [])

  const handleClick = (selectedCountry) => {
    const isCorrect = selectedCountry.name.common === correctCountry.name.common

    if (isCorrect) {
      document.body.classList.add('correct')
      const newPoints = points + 1
      setPoints(newPoints)
      if (newPoints % 5 === 0) {
        setLevel(level + 1)
      }
    } else {
      document.body.classList.add('incorrect')
    }
    setTimeout(() => {
      document.body.classList.remove('correct', 'incorrect')
    }, 500)
    generateNewFlags(countries)
  }

  if (!correctCountry || flags.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='guess_the_flag'>
      <h2>Puntos: {points}</h2>
      <h2>Nivel: {level}</h2>
      <h1>Guess The Flag </h1>
      <Link to={`/country/${correctCountry.name.common}`}>
        <h3>{correctCountry.name.common}</h3>
      </Link>

      <div className='flags'>
        {flags.map((country) => (
          <FlagCard key={country.flags.svg} country={country} handleClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default GuessCountry
