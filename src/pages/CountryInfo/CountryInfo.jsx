import React, { useEffect, useState } from 'react'
import './CountryInfo.css'
import { useParams } from 'react-router-dom'

const CountryInfo = () => {
  const { name } = useParams()
  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,independent,unMember,currencies,capital,languages,maps`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Respuesta del fetch:', res)
        setCountry(res[0])
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [name])
  if (!country) return <p>Cargando...</p>

  return (
    <div className='country-info'>
      <h2>{country.name.common}</h2>
      <div className='img_wrp'>
        <img src={country.flags.svg} alt={country.name.common} />
      </div>
      <p>{country.independent ? 'Independent' : 'Dependent'}</p>
      <p>Europe union member: {country.unMember ? 'True' : 'False'}</p>
      <p>Currency: {country.currencies.name}</p>
      <p>Capital: {country.capital}</p>
      <p>Idiomas: {Object.values(country.languages).join(', ')}</p>
      <p>
        Maps: <a href={country.maps.googleMaps}>{country.maps.googleMaps}</a>
      </p>
    </div>
  )
}

export default CountryInfo
