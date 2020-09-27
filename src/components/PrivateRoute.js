import React from "react"
import {connect} from "react-redux"
import {Route} from "react-router-dom"
import LoginPage from "./LoginPage"
import Header from "./Header"
 
const PrivateRoute= ({isAuthenticated,component:Component,...rest})=>{
    const x = isAuthenticated? Component : LoginPage;
    return ( 
        <Route {...rest} component={(props) => isAuthenticated? (<div><Header></Header><Component {...props}/></div>) : <LoginPage />}></Route>
    )
}
const mapStateToProps=(state)=>{
    return {
        isAuthenticated: !!state.auth.id
    }
}
export default connect(mapStateToProps)(PrivateRoute)