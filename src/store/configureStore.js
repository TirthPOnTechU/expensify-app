import {createStore, combineReducers} from "redux";
import expensesReducer from "../reducers/expenses.js"
import filtersReducer from "../reducers/filters.js"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux";
export default ()=>{
    const store=createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
      }),applyMiddleware(thunk))
      return store;
}