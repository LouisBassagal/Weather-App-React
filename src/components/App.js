import React, { useState } from "react";
import GetWeatherInformations from "./getWeatherInformations";
import DisplayInformations from "./displayInformation";
import CloudBG from "../assets/clouds.mp4"
import RainBG from "../assets/rain.mp4"
import SunnyBG from "../assets/sunny.mp4"
import MistBG from "../assets/mist.mp4"
import DrizzleBG from "../assets/drizzle.mp4"
import "../styles/App.css"

require('dotenv').config();

function App() {
  const [data, setData] = useState({});
  return (
  <div className="weather-container">
    { data.weather && data.weather[0].main === 'Clouds' ?
    <video className="weather-background" autoPlay loop muted>
      <source src={ CloudBG } type="video/mp4"/>
      Your browser doesn't support video tag ':(' !
    </video> : null
    }
    { data.weather && data.weather[0].main === 'Rain' ? 
    <video className="weather-background" autoPlay loop muted>
    <source src={ RainBG } type="video/mp4"/>
    Your browser doesn't support video tag !
  </video>
  : null
  }
  { data.weather && data.weather[0].main === 'Clear' ? 
    <video className="weather-background" autoPlay loop muted>
    <source src={ SunnyBG } type="video/mp4"/>
    Your browser doesn't support video tag !
  </video>
  : null
  }
  { data.weather && data.weather[0].main === 'Mist' ? 
    <video className="weather-background" autoPlay loop muted>
    <source src={ MistBG } type="video/mp4"/>
    Your browser doesn't support video tag !
  </video>
  : null
  }
  { data.weather && data.weather[0].main === 'Drizzle' ? 
    <video className="weather-background" autoPlay loop muted>
    <source src={ DrizzleBG } type="video/mp4"/>
    Your browser doesn't support video tag !
  </video>
  : null
  }
    <GetWeatherInformations data={data} setData={setData} />
    <DisplayInformations data={data} />
  </div>
  )
}

export default App;