import React from "react"
import { slide as Menu } from "react-burger-menu"
// import { elastic as Menu } from 'react-burger-menu'
// import { bubble as Menu } from 'react-burger-menu'
import'../Styles/sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/signup">
        Sign Up
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      <a className="menu-item" href="/search">
       Search
      </a>

      <a className="menu-item" href="/history">
       History
      </a>
    </Menu>
  )
}



