import {Switch, Route} from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/login';
import Signup from './Pages/signup';
import Home from './Pages/home';
import History from './Pages/history'

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
                {/* <Sidebar items={items} /> */}
                <Switch>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={"/search"} exact={true} component={Searchweather}/>
                    <Route path={"/login"} exact={true} component={Login}/>
                    <Route path={"/signup"} exact={true} component={Signup}/>
                    <Route path={'/history'} component={History}/>
                </Switch>
            
            </div>  
        </AppContext.Provider>
        
    );
};

export default App;

