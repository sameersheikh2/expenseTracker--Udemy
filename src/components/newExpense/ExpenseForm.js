import React, { useState } from 'react'
import "./ExpenseForm.css"
const ExpenseForm = () => {
    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState("");
    const [enterdDate, setEnterdDate] = useState("");

    const titleChangeHandler= (e) => {
        setEnterdTitle(e.target.value)
    };
    
    const amountChangeHandler= (e) => {
        setEnterdAmount(e.target.value)
    };
    
    const dateChangeHandler= (e) => {
        setEnterdDate(e.target.value)
    };

    const submitHandler= (e) => {
        e.perventDefault();

        const expenseData= {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
    };

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add submit</button>
            </div>
    </form>
    )
}

export default ExpenseForm;