import React from "react"
import {connect} from "react-redux"
import {Route , Redirect} from "react-router-dom"


const PublicRoute =({isAuthenticated,component:Component,...rest})=>(
    <Route {...rest} component={(props)=>(isAuthenticated? <Redirect to="/dashboard"></Redirect> : <Component></Component>)}></Route>
)
const mapStateToProps=(state)=>{
    return {
        isAuthenticated: !!state.auth.id
    }
}
export default connect(mapStateToProps)(PublicRoute)