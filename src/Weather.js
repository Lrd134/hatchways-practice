import React from 'react';

import toFarenheit from './calc';
function Weather({weather, id}) {
  const getDay = weather => {
    const date = new Date(parseFloat(weather.sunrise) * 1000)
    console.log(date)
    let day = 'none';
    switch(date.getDay()) {
      case(0):
        day = 'Sun';
        break;
      case(1):
        day="Mon";
        break;
      case(2):
        day = 'Tue';
        break;
      case(3):
        day="Wed";
        break;
      case(4):
        day = 'Thurs';
        break;
      case(5):
        day="Fri";
        break;
      case(6):
        day="Sat";
        break;
      default:
        day="Uknown";
    }
      return day;
    
  }
  return (
    <span>
      <p className="temp day">
        {getDay(weather)}
      </p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
      <span className="min temp">{toFarenheit(weather.temp.min)}°</span><span className="max temp">{toFarenheit(weather.temp.max)}°</span>
    </span>
    
  )


}

export default Weather;