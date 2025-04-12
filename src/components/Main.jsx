import React from 'react'
import ExpenseForm from './ExpenseForm'
import DisplayExpense from './DisplayExpense'

function Main() {
  return (
    <div className='maincontent'>
        <ExpenseForm/>
        <DisplayExpense/>
    </div>
  )
}

export default Main