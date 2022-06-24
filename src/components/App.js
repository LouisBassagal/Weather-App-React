import React, { useState } from "react";
import GetWeatherInformations from "./getWeatherInformations";
import "../styles/App.css"

function App() {
  const [data, setData] = useState({});
  return (
  <div className="weather-container">
    <GetWeatherInformations data={data} setData={setData} />
  </div>
  )
}

export default App;