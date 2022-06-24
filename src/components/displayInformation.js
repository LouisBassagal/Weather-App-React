import React from 'react'
import humidity from '../assets/humidite.png'
import wind from '../assets/vent.png'
import barometer from '../assets/barometre.png'
import '../styles/displayInformations.css'

function DisplayInformations({data}) {
  return (
    <div className="weather-information-container">
      <div className="weather-information">
        <img src={humidity} alt="humidity" className='weather-info-logos' />
        {data.main ? <p>{ data.main.humidity }%</p> : <p>0</p>}
      </div>
      <div className="weather-information">
        <img src={wind} alt="wind" className='weather-info-logos' />
        {data.wind ? <p>{ data.wind.speed } Km/h</p> : <p>0</p>}
      </div>
      <div className="weather-information">
        <img src={barometer} alt="barometer" className='weather-info-logos' />
        {data.main ? <p>{ data.main.pressure } mPa</p> : <p>0 mPa</p>}
      </div>
    </div>
  )
}

export default DisplayInformations