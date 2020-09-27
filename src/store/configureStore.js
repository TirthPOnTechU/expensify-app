import {createStore, combineReducers} from "redux";
import expensesReducer from "../reducers/expenses.js"
import filtersReducer from "../reducers/filters.js"
import authReducer from "../reducers/auth"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux";
export default ()=>{
    const store=createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
      }),applyMiddleware(thunk))
      return store;
}