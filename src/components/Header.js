import React from 'react';
import {NavLink} from 'react-router-dom';
import{connect} from "react-redux"
import {startLogout} from "../actions/firebase"
const Header=(props)=>(
    <header>
      <h1>Header</h1>
      <NavLink exact={true} activeClassName='is-active' to='/dashboard'>Home</NavLink>
      <NavLink activeClassName='is-active' to='/create'>Create</NavLink>
      <NavLink activeClassName='is-active' to='/edit'>Edit</NavLink>
      <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
      <button onClick={()=>props.dispatch(startLogout())}>Sign Out</button>
    </header>
  )
  export default connect()(Header)