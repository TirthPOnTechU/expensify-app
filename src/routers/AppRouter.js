import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import HelpPage from '../components/HelpPage.js'
import PageNotFound from '../components/PageNotFound.js'
import Header from '../components/Header.js'
import LoginPage from '../components/LoginPage'
import { createBrowserHistory } from 'history';
import PrivateRoute from '../components/PrivateRoute.js';
import PublicRoute from "../components/PublicRoute"

const history = createBrowserHistory();

  const AppRouter=()=>(
    <Router history={history}>
    <div>
        <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}></PublicRoute>
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}></PrivateRoute>
        <PrivateRoute path='/create' component={AddExpensePage}></PrivateRoute>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}></PrivateRoute>
        <PrivateRoute path='/help' component={HelpPage}></PrivateRoute>
        <PrivateRoute component={PageNotFound}></PrivateRoute>
        </Switch>
      </div>
    </Router>
    
  )
  export {AppRouter,history}