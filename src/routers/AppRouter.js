import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import HelpPage from '../components/HelpPage.js'
import PageNotFound from '../components/PageNotFound.js'
import Header from '../components/Header.js'
import LoginPage from '../components/LoginPage'
  

  const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route component={Header}></Route>
        <Switch>
        <Route path='/' component={LoginPage} exact={true}></Route>
        <Route path='/dashboard' component={ExpenseDashboardPage}></Route>
        <Route path='/create' component={AddExpensePage}></Route>
        <Route path='/edit/:id' component={EditExpensePage}></Route>
        <Route path='/help' component={HelpPage}></Route>
        <Route component={PageNotFound}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    
  )
  export {AppRouter}