import moment from 'moment'
export default (expenses,filters)=>{
    return expenses.filter(expense=>{
      const startDateCheck= !filters.startDate ? true : moment(expense.createdAt).isSameOrAfter(filters.startDate);
      const endDateCheck=typeof filters.endDate !=="number"? true : moment(expense.createdAt).isSameOrBefore(filters.endDate);
      const textCheck=expense.description.toLowerCase().includes(filters.text.toLowerCase())  
      return (startDateCheck && endDateCheck && textCheck)
    }).sort((a,b)=>{
      if( filters.sortBy=='date'){
        return a.createdAt<b.createdAt? -1: 1;
      }else{
        return a.amount<b.amount? 1:-1;
      }
    })
  }
  