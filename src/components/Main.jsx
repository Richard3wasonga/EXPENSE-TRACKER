import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import SearchExchange from './SearchExchange'
import {expense as initialExpense} from '../data'

function Main() {
  const [expense, setexpense] = useState(initialExpense)
  return (
    <div className='maincontent'>
        <ExpenseForm expense={expense} setExpense={setexpense}/>
        <SearchExchange expense={expense}/>
    </div>
  )
}

export default Main