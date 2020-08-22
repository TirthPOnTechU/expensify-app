export const setStartDate=(time=undefined)=>({
    type:"SET_START_DATE",
    time
  })
  export const setEndDate=(time=undefined)=>({
    type:"SET_END_DATE",
    time
  })
  export const setTextFilter=(text='')=>({
    type:"SET_TEXT_FILTER",
    text
  })
  export const sortByAmount=()=>({
    type: "SORT_BY_AMOUNT"
  })
  
  export const sortByDate=()=>({
    type: "SORT_BY_DATE"
  })
  