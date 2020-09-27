import React from "react"
import {connect} from "react-redux"
import {removeExpense,startRemoveExpense} from "../actions/expenses.js"
import moment from "moment";

import {Link} from "react-router-dom"
const Expense=({description, amount, createdAt,id,dispatch})=>(
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        
        <h3>{"$"+(amount / 100).toString()} - {moment(createdAt).format("MMM Do YY")}</h3>
        <button onClick={()=>{
            dispatch(startRemoveExpense(id))
        }}>Remove</button>
        
    </div>
)
export default connect()(Expense)