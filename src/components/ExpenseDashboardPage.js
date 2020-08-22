import React from 'react';
import ExpenseList from "./ExpenseList.js"
import ExpenseFilter from "./ExpenseListFilters.js"
const ExpenseDashboardPage=()=>(
    <div>
    <ExpenseFilter></ExpenseFilter>
      <ExpenseList></ExpenseList>
    </div>
  );
  export default ExpenseDashboardPage