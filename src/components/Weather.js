import React, { Component } from 'react';
import axios from 'axios'

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weatherList: []
        }
    }
    componentWillMount() {
        axios.get('https://api.openweathermap.org/data/2.5/group?id=2650225,2673730&units=metric&APPID=2224f0fb90f0d015e442ca2c30f99d9d')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ weatherList: response.data.list });
                console.log(this.state.weatherList);
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="">
                <h1>Weather</h1>
                {this.state.weatherList.map(weather => (
                    <div className="row justify-content-center" key={weather.id}>
                        <div className="col-12 col-md-8 col-lg-4" >
                            <div className="card">
                                <div className="card-head">
                                    <h5 className="card-title">{weather.name} </h5>
                                    <img src={"https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt={weather.weather[0].description}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{weather.weather[0].description}
                                    </h5>
                                    <p className="card-text">Current Temp: {weather.main.temp}</p>
                                    <p className="card-text">Min Temp: {weather.main.temp_min}</p>
                                    <p className="card-text">Max Temp: {weather.main.temp_max}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Weather;
