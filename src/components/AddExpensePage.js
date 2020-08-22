import React from 'react';
import ExpenseForm from './ExpenseForm.js'
import {addExpense} from '../actions/expenses.js'
import {connect} from 'react-redux' 
import {startAddExpense} from '../actions/expenses'
const AddExpensePage=(props)=>(
    <div>
      <ExpenseForm getNewExpense={(expense)=>{
        props.dispatch(startAddExpense(expense));
        props.history.push('/')

      }}></ExpenseForm>
    </div>
  );

  export default connect()(AddExpensePage)