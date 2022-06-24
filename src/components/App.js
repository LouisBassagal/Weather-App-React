import React, { useState } from "react";
import GetWeatherInformations from "./getWeatherInformations";
import DisplayInformations from "./displayInformation";
import CloudBG from "../assets/clouds.mp4"
import "../styles/App.css"

function App() {
  const [data, setData] = useState({});
  return (
  <div className="weather-container">
    <video className="weather-background" autoPlay loop muted>
      <source src={ CloudBG } type="video/mp4"/>
      Your browser doesn't support video tag ':(' !
    </video>
    <GetWeatherInformations data={data} setData={setData} />
    <DisplayInformations data={data} />
  </div>
  )
}

export default App;