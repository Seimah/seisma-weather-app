import React, {useState} from 'react';

import "../Styles/sidebar.css"

import profileIcon from '../Assets/Images/background.png';


function Sidebar () {
    const [opened, setOpened] = useState(false);

    return (
        <div className={`sidebar ${opened ? "sidebar-opened" : ""}`}>
            <i onClick={()=> setOpened(!opened)} className="sidebar-toggler fa fa-bars fa-2x fa-2x"></i>
            <div className={"profile-info"}>
                <img className={"profileImg"} src={profileIcon} alt=""/>
                <p className="name">Sandra Asantey</p>
                <p className="email">asantey4s@gmail.com</p>
            </div>
            <div className={"menu-actions"}>

            </div>
        </div>
    )
}


export default Sidebar;
