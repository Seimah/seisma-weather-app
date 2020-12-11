import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Styles/home.css'



import weatherIcon from '../Assets/Images/weather-icon.png'
// import weatherIcon1 from '../Assets/Images/weather-1.png'
import weatherIcon2 from '../Assets/Images/weather-2.png'
// import weatherIcon3 from '../Assets/Images/weather-3.png'
import weatherIcon4 from '../Assets/Images/weather-4.png'

import Loader from '../Components/loader';
import { AppContext } from '../App';


const APP_ID = 'af4eecb3aee86e374e8f7cf00db5bba7'

function Home() {

    const [weatherData, setWeatherData] = useState({})

    const app_context = useContext(AppContext)

    const toCelsius = (kelvinTemp) => {
        const celsiusTemp = kelvinTemp - 273.15
        return celsiusTemp
    }
    

    const getCurrentWeather = (coords) => {
        app_context.setIsLoading(false)
        if (coords.latitude !== undefined) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
        // tilda- makes things dynamic
                .then((response) => {
                    setWeatherData(response.data)
                    app_context.setIsLoading(false)
                })

                .catch((error) => {
                    console.log(error)
                    app_context.setIsLoading(false)
                })

} else {
    console.log("Not ready", coords)
    app_context.setIsLoading(false)
}

    }

    useEffect(() => {
        app_context.setIsLoading(false)
        navigator.geolocation.getCurrentPosition((position) => {
            app_context.setIsLoading(true)
            getCurrentWeather(position.coords)
            console.log(position.coords)
        }, (error) => {
            console.log("Hey this is your err:", error)
        })
    }, [])
    
    let cd = new Date()
    let current_date = cd.toDateString()
    let current_time = cd.toLocaleTimeString()

    return (
        app_context.isLoading ? <Loader/> : (
            <div className="container">
                <div className="content">
                <div className='weather-heading'>
                <h1>Todays<br/>Weather<br/>Forecast</h1>
                    <Link to='/login'><button>search different location</button></Link>
                    </div>
                    <div className="left">
                        <h3>{current_date}</h3>
                        <h4>{current_time}</h4>
                        <div className="currentWeatherInfo">
                            <p className="temp">{weatherData.main ? toCelsius(weatherData.main.temp) : ""}&deg;</p>
                            <img src={weatherData.weather ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : ""} alt="Weather Icon"/>
                        </div>
                        <p className="description">Current Weather Condition: {weatherData.weather ? weatherData.weather[0].description : ""}</p>
                      
                    <span>City: {weatherData.name ? weatherData.name : ''}, {weatherData.sys ? weatherData.sys.country : ''}</span>
                        <div className='col-7'>
                            <p>Humidity: {weatherData.main ? weatherData.main.humidity : ""}%</p>
                            <p>Pressure: {weatherData.main ? weatherData.main.pressure : ""}hPa</p>
                        <div className="weekWeatherInfo">
                            <div className="weather-info">
                                <img src={weatherIcon} alt="Weather Info 1"/>
                                <h5>Thunders</h5>
                            </div>
                            <div className="weather-info">
                                <img src={weatherIcon2} alt="Weather Info 2"/>
                                <h5>Cloudy</h5>
                            </div>
                            <div className="weather-info">
                                <img src={weatherIcon4} alt="Weather Info 3"/>
                                <h5>Rainy</h5>
                            </div>
                            </div>
                        {/* </div> */}
                    </div>
                    </div>
                    <div className="right">
                    </div>
                </div>
             </div>
        )
    )}


export default Home;