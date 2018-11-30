import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="">
                <h1>Weather</h1>
                {this.props.weatherList.map(weather => (
                    <div className="row justify-content-center" key={weather.id}>
                        <div className="col-12 col-md-8 col-lg-4" >
                            <div className="card mb-4">
                                <div className="card-head p-3 bg-light">
                                    <h5 className="card-title mb-0">{weather.name} </h5>
                                </div>
                                <div className="card-body">
                                    <img className="mb-2" src={"https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt={weather.weather[0].description}/>
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
