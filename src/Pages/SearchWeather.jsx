import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import '../Styles/searchWeather.css'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import '../Styles/auth.css'



const APP_ID = 'af4eecb3aee86e374e8f7cf00db5bba7'

function Searchweather() {
    const app_context = useContext(AppContext)
    const [ searchQuery, setSearchQuery] = useState('')
    const [ searchResponses, setSearchResponses] = useState({})
    const [weatherSearchHistory, setWeatherSearchHistory] = useState(localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : [])
    const handleSearchQueryOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const toCelsius = (kelvinTemp) => {
        const celsiusTemp = kelvinTemp - 273.15
        return celsiusTemp
    }
    const searchWeather = (e) => { 
        if (e) {
            e.preventDefault()
        } 
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`
        axios.get(API_URL)
        .then((response)=>{
            setSearchResponses(response.data)
            setSearchQuery('')
        }).catch((error)=>{
            console.log('herein lies your error:',error)
            alert('Location not found')
        })
    }

    const setWeatherHistory = (query, result) => {
        const newHistory = weatherSearchHistory

        if (newHistory.length < 5) {
            newHistory.push({
                [`${query}`]: result
            })
        } else if (newHistory.length >= 5){
            newHistory.shift()
            newHistory.push({
                [`${query}`]: result,
                date: `${current_date}`,
                time: `${current_time}` 
            })
        }

        localStorage.setItem("searchHistory", JSON.stringify(newHistory))
        console.log(JSON.parse(localStorage.getItem('searchHistory')))
    }

    useEffect(() =>{
        searchWeather();
    }, []);

    // useEffect that runs upon update of searchResult
    useEffect(() =>{
        setWeatherHistory(searchQuery, searchResponses);
    }, [searchResponses]);

    let cd = new Date()
    let current_date = cd.toDateString()
    let current_time = cd.toLocaleTimeString();


    return (
        <div className='auth'>
            <div className='content'>
                <div className='left'>
                    <form onSubmit={searchWeather}>
                    <h3>{current_date}</h3>
                        <h4>{current_time}</h4>
                        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onChange={handleSearchQueryOnChange} placeholder = 'Enter city'/>
                        <button type='submit' className="btn btn-primary">Search city</button>
                        <p className="temp">{searchResponses.main ? toCelsius(searchResponses.main.temp) : ""}&deg;</p>
                            <img src={`http://openweathermap.org/img/wn/${searchResponses.weather ? searchResponses.weather[0].icon : '10d'}@2x.png`} alt='Weather Icon'/>
                            <span>City: {searchResponses.name ? searchResponses.name : ''}, {searchResponses.sys ? searchResponses.sys.country : ''}</span>
                            <p>Humidity: {searchResponses.main ? searchResponses.main.humidity : ""}%</p>
                            <p>Pressure: {searchResponses.main ? searchResponses.main.pressure : ""}hPa</p>       
                    </form>
                    {app_context.isLoggedIn ? <p><Link to='/history' id='auth-link'>Search History</Link></p>:''}
                   
                    <p className="description">Current Weather Condition: {searchResponses.weather ? searchResponses.weather[0].description : ""}</p>
                    </div>

                    <div className="right">
                    </div>
                
                    </div> 
                </div>
            
                
        
    

                
            
    )
}

export default Searchweather;