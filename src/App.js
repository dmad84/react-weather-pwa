import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import Weather from './components/Weather'

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherList: []
    }
  }
  componentWillMount() {
    axios.get('https://api.openweathermap.org/data/2.5/group?id=2650225,3333231&units=metric&APPID=2224f0fb90f0d015e442ca2c30f99d9d')
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
      <div className="App container">
        <Weather weatherList={this.state.weatherList}/>
      </div>
    );
  }
}

export default App;
