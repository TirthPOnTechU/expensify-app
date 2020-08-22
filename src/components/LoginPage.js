import React from 'react'
import {startLogin} from "../actions/firebase"
import {connect} from "react-redux"

const LoginPage= (props)=>(
    <div>
        <button onClick={()=>props.dispatch(startLogin())}>Login</button>
    </div>
)

export default connect()(LoginPage)

