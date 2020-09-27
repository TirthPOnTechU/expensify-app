import React from 'react';
import {NavLink} from 'react-router-dom';
import{connect} from "react-redux"
import {startLogout} from "../actions/firebase"
const Header=(props)=>(
    <header>
      <h1>EXPENSIFY</h1>
      <NavLink exact={true} activeClassName='is-active' to='/dashboard'>Dashboard</NavLink>
      <NavLink activeClassName='is-active' to='/create'>Create</NavLink>
      <button onClick={()=>props.dispatch(startLogout())}>Sign Out</button>
    </header>
  )
  export default connect()(Header)