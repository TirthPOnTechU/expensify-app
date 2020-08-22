import React from 'react';
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component{
    state={
        description: this.props.expenseToEdit? this.props.expenseToEdit.description : "",
        amount: this.props.expenseToEdit? (this.props.expenseToEdit.amount/ 100).toString() : "",
        note:this.props.expenseToEdit? this.props.expenseToEdit.note : "",
        createdAt:this.props.expenseToEdit? moment(this.props.expenseToEdit.createdAt) : moment(),
        calenderFocused: false,
        error:undefined
    }
    onChangeDescription=(e)=>{
        let description=e.target.value;
        this.setState(()=>({description}))
    }
    onChangeNote=(e)=>{
        let note=e.target.value;
        this.setState(()=>({note}))
    }
    onChangeAmount=(e)=>{
        e.preventDefault();
        let amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onFormSubmit=(e)=>{
        e.preventDefault()
        if(this.state.description==="" || this.state.amount===""){
            this.setState(()=>({error:'Please make sure you filled "description" and "amount" entries!'}))
        }else{
            this.setState(()=>({error:undefined}))
            this.props.getNewExpense({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    }
    render(){
        return(
            <form>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                ></input>
                <input 
                    type="text"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onChangeAmount}
                ></input>
                <textarea
                    onChange={this.onChangeNote}
                    value={this.state.note}
                    placeholder="note"
                ></textarea>
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                    focused={this.state.calenderFocused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ calenderFocused:focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                <button onClick={this.onFormSubmit}>Add Expense</button>
            </form>
        )
    }
}
export default ExpenseForm;