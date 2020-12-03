import React, {useState} from 'react'
import axios from 'axios'
import '../Styles/searchWeather.css'


const APP_ID = 'af4eecb3aee86e374e8f7cf00db5bba7'

function Searchweather() {
    const [ searchQuery, setSearchQuery] = useState('')

    const search=(e) => {
        e.preventDefault()
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`
        axios.get(API_URL)
        console.log(searchQuery)
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className='left'>
                    <form onSubmit={search}>
                        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder = 'Enter city to search'/>
                        <button type='submit'>Search</button>
                    </form>
                    </div>

                <div className='right'>
                </div>
            </div>
            
        </div>
    )
}

export default Searchweather;