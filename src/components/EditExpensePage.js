import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm.js'
import {editExpense,startEditExpense} from '../actions/expenses.js'
const EditExpensePage=(props)=>{
    return (<div>
      <ExpenseForm getNewExpense={(expense)=>{
        props.dispatch(startEditExpense(props.expense.id,expense))
        props.history.push('/')
      }} expenseToEdit={props.expense}></ExpenseForm>
    </div>)
};
  const mapStateToProps=(state,props)=>{
    return{
      expense: state.expenses.find((item)=> item.id===props.match.params.id)
    }
  }
  export default connect(mapStateToProps)(EditExpensePage)