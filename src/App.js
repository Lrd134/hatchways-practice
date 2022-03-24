import './App.css';
import WeatherContainer from './WeatherContainer.js';
import React, { Component } from 'react';
class App extends Component {
  state = {
    weatherData: [],
    requesting: false
  } 

  componentDidMount() {
    if (!this.state.requesting)
      this.setState({requesting: true})
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=42.93&lon=-78.72&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}`)
    .then(resp => resp.json()).then(json => this.updateWeather(json))
  }

  updateWeather = json => {
    console.log(json)
    this.setState({weatherData: json.daily.slice(0, 5), requesting: false})
  }

  render (){
  return (
    <div className="App">
        <div>
          <WeatherContainer weatherData={this.state.weatherData}/>
        </div>
      
    </div>
  );}
}

export default App;