import React from "react";
import {connect} from "react-redux"
import Expense from "./Expense.js"
import showVisibleExpenses from "../selectors/expenses.js"
const ExpenseList=(props)=>(
    <div>
        {props.expenses.map(expense=>(
            <Expense key={expense.id} {...expense}></Expense>
        ))}
    </div>
)
const mapStateToProps=(state)=>{
    return{
        expenses:showVisibleExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList)

