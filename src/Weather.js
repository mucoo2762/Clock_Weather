import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Weather.css';


class Weather extends Component{
  state = {
    api_key: 'b8ca631cabd6155a38fc9511df30eb5e',
    weatherInfo: ""
  };

  componentDidMount(){
    this.checkCoords();
  }

  checkCoords = async() => {
    const LS_COORDS = localStorage.getItem("coords");

    if(LS_COORDS === null){
      this.getCoords();
    }else{
      const currentWeatherInfo = await this.getWeatherData(LS_COORDS);
      this.setState({
        weatherInfo: currentWeatherInfo
      });
    }
  };

  getWeatherData = (coordsObj) => {
    const obj = JSON.parse(coordsObj);

    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj.latitude}&lon=${obj.longitude}&appid=${this.state.api_key}&units=metric`)
    .then(Response => Response.json())
    .then(jsonData => `${jsonData.main.temp}℃ @ ${jsonData.name}`)
    .catch(err => console.log(err));
  };

  getCoords = () => {
    navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, () => console.log("Geo handle error!!"));
  };

  handleGeoSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
    localStorage.setItem("coords", JSON.stringify(coordsObj));

    const currentWeatherInfo = await this.getWeatherData(localStorage.getItem("coords"));
    this.setState({
      weatherInfo: currentWeatherInfo
    });
  }

  render(){
    return(
      <header>
          <span>{this.state.weatherInfo ? this.state.weatherInfo : "Loading..."}</span>
      </header>
    ); 
  };
}









export default Weather;
