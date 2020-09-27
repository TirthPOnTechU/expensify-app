import React from 'react';
import {connect} from "react-redux"
import {setTextFilter,sortByDate,sortByAmount} from "../actions/filters.js"
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setEndDate, setStartDate} from '../actions/filters.js'
class ExpenseListFilters extends React.Component{
    state={
        focusedInput: null
    }
    render(){
        return(
        <div>
        <input type="text" defaultValue={this.props.filter.text} onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value))
        }}></input>
        <select onChange={(e)=>{
            switch(e.target.options[e.target.selectedIndex].value){
                case 'amount':
                    this.props.dispatch(sortByAmount())
                    break;
                case "date":
                    this.props.dispatch(sortByDate())
                    break
                default:
                    return
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filter.startDate}
        endDate={this.props.filter.endDate}
        onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDate(startDate))
            this.props.dispatch(setEndDate(endDate))
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        numberOfMonths={1}
        isOutsideRange={()=> (false)}
        showClearDates={true}
        >
        </DateRangePicker>
    </div>)
    }
}

const mapStateToProps=(state)=>({
    filter:state.filters
})
export default connect(mapStateToProps)(ExpenseListFilters)