import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import {AppRouter} from './routers/AppRouter.js'
import configureStore from "./store/configureStore.js";
import * as serviceWorker from './serviceWorker';
import showVisible from "./selectors/expenses.js"
import {addExpense,editExpense,removeExpense,startSetExpenses} from "./actions/expenses.js"
import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate} from "./actions/filters.js"
import {Provider} from "react-redux"
import {firebase} from "./firebase/firebase.js"
const store=configureStore();

const jsx=(
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)
store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );  
})
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log("signed in")
  }else{
    console.log("signed out")
  }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
