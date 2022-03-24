import React from 'react';
import Weather from './Weather.js';
function WeatherContainer(props) {
  console.log(props)
  const renderWeather = weather => {
    
    return weather.map((data, index) => 
    (<li key={index} className="temp">
    <Weather weather={data}/>
    </li>))
    
  }
  return (
    <ul className="temp">
      {renderWeather(props.weatherData)}
    </ul>
  ) 
}

export default WeatherContainer;