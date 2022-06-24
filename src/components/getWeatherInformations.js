import axios from 'axios';
import React, { useState } from 'react';
import '../styles/getWeatherInformations.css'

function GetWeatherInformations({data, setData}) {
  const [location, setLocation] = useState('');
  function handleInput(e) {
    setLocation(e.target.value)
    if (e.key === 'Enter') {
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=95835b80c4fc7970b242716821a152cf&units=metric`
      axios.get(urlWeather).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="weather-container">
     <div className="weather-input-coords">
      <div className="weather-coords">
        {data.coord ? <p>{ data.coord.lat } { data.coord.lon }</p> : <p>No data !</p>}
      </div>
      <div>
        <input
              className='weather-input'
              placeholder="Enter Location"
              value={location}
              onKeyDown={handleInput}
              onChange={handleInput}
              />
      </div>
    </div>
      <div className='weather-name-data'>
        {data.name && data.sys ? <h1>{ data.name }, { data.sys.country }</h1> : <h1>Enter the name of a city !</h1> }
        {data.main && data.weather ? <p>{ data.main.temp }°C, { data.weather[0].main }</p> : <p>Nothing to see here !</p>}
      </div>
    </div>
  )
}

export default GetWeatherInformations