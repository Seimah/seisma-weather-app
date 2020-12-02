import {Switch, Route} from 'react-router-dom'

import Login from './Pages/login';
import Signup from './Pages/signup';
import Home from './Pages/home';

import React, {useState} from 'react'
import Sidebar from "./Components/sidebar"

import "./Styles/variable.css"
import Searchweather from './Pages/SearchWeather'



export const AppContext = React.createContext()

function App() {

    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <AppContext.Provider value={{isLoading, setIsLoading}}>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={"/search"} exact={true} component={Searchweather}/>
                    <Route path={"/login"} exact={true} component={Login}/>
                    <Route path={"/signup"} exact={true} component={Signup}/>
                </Switch>
            </div>
        </AppContext.Provider>
    );
}

export default App;

