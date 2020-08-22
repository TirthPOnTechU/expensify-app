import uuid from "uuid"
import {firebase} from "../firebase/firebase.js"
import expenses from "../reducers/expenses.js"
import ExpenseList from "../components/ExpenseList.js"

export const addExpense=({id,description,note,amount,createdAt})=>({
    type:"ADD_EXPENSE",
    expense:{
      id,
      description,
      note,
      amount,
      createdAt
    }
  }
  )
  export const startAddExpense=({description='',note='', amount=0,createdAt=0}={})=>{
    return (dispatch)=>{
      let newExpense={description,note,amount,createdAt}
      firebase.database().ref('expenses').push(newExpense).then((ref)=>{dispatch(addExpense({id:ref.key,...newExpense}))}).catch(error=>{console.log(error)})
    }
  }
  export const editExpense=(id,updates)=>({
    type: "EDIT_EXPENSE",
    id,
    updates
  })
  export const startEditExpense=(id,updates)=>{
    return (dispatch)=>{
      firebase.database().ref("expenses/"+id).update(updates).then(()=>{
        dispatch(editExpense(id,updates))
      })
    }
  }
  
  export const removeExpense=({id})=>({
    type: "REMOVE_EXPENSE",
    id
  })
  export const startRemoveExpense=(id)=>{
    return (dispatch)=>{
      firebase.database().ref("expenses/"+id).remove().then(()=>{
        dispatch(removeExpense({id}))
      })
    }
  }

  export const setExpenses=((expenses)=>({
    type:"SET_EXPENSES",
    expenses
  }))

  export const startSetExpenses=()=>{
    return (dispatch)=>{
      const expenseList=[]
      return firebase.database().ref("expenses").once("value").then((snapshot)=>{
        for(const expense in snapshot.val()){
          expenseList.push({id:expense, description: snapshot.val()[expense].description,note:snapshot.val()[expense].note,amount:snapshot.val()[expense].amount,createdAt:snapshot.val()[expense].createdAt})
        }
        dispatch(setExpenses(expenseList))
      })
    }
  }