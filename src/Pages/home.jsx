import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import '../Styles/home.css'


import weatherIcon from '../Assets/Images/weather-icon.png'
import weatherIcon1 from '../Assets/Images/weather-1.png'
import weatherIcon2 from '../Assets/Images/weather-2.png'
import weatherIcon3 from '../Assets/Images/weather-3.png'
import weatherIcon4 from '../Assets/Images/weather-4.png'
// import weatherIcon5 from '../Assets/Images/weather-icon 5.png'

import Loader from '../Components/loader';
import { AppContext } from '../App';


const APP_ID = 'af4eecb3aee86e374e8f7cf00db5bba7'

function Home() {

    // const [coords, setCoords] = useState({})
    const [weatherData, setWeatherData] = useState({})

    const app_context = useContext(AppContext)

    const toCelsius = (kelvinTemp) => {
        const celsiusTemp = kelvinTemp - 273.15
        return celsiusTemp
    }
    

    const getCurrentWeather = (coords) => {
        app_context.setIsLoading(true)
        if (coords.latitude !== undefined) {
            axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
        // tilda- makes things dynamic
                .then((response) => {
                    setWeatherData(response.data)
                    app_context.setIsLoading(false)
                    console.log("Temperature: ", response.data.weather[0].icon)
        })
} else {
    console.log("Not ready", coords)
    app_context.setIsLoading(false)
}

    }

    useEffect(() => {
        app_context.setIsLoading(true)
        navigator.geolocation.getCurrentPosition((position) => {
            app_context.setIsLoading(true)
            getCurrentWeather(position.coords)
            console.log(position.coords)
        }, (error) => {
            console.log("Hey this is your err:", error)
        })
    }, [])
    

    return (
        app_context.isLoading ? <Loader/> : (
        <div className = 'container'>
            <div className = 'content'>
                <div className = 'left'>
                    <h3>Fri, 27<br/>November</h3>
                    <div className = 'currentWeatherInfo'>
                    <p className="temp">{weatherData.main ? toCelsius(weatherData.main.temp) : ""}&deg;</p>
                            <img src={weatherData.weather ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : ""} alt="Weather Icon"/>
                        </div>
                        <p className="description">Description: {weatherData.weather ? weatherData.weather[0].description : ""}</p>
                        <div className="weekWeatherInfo">
                            <div className="weather-info">
                                <h5>MON</h5>
                                <img src={weatherIcon1} alt="Weather Info 1"/>
                                <p>12&deg;</p>
                            </div>
                            <div className="weather-info">
                                <h5>TUE</h5>
                                <img src={weatherIcon2} alt="Weather Info 2"/>
                                <p>12&deg;</p>
                            </div>
                            <div className="weather-info">
                                <h5>WED</h5>
                                <img src={weatherIcon3} alt="Weather Info 3"/>
                                <p>12&deg;</p>
                            </div>
                            <div className="weather-info">
                                <h5>THUR</h5>
                                <img src={weatherIcon4} alt="Weather Info 4"/>
                                <p>12&deg;</p>
                            </div>
                            <div className="weather-info">
                                <h5>FRI</h5>
                                <img src={weatherIcon} alt="Weather Info 5"/>
                                <p>12&deg;</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>)
    )
}


export default Home;