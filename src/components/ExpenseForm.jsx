import React from 'react'

function ExpenseForm() {
  return (
    <div className='formdiv'>
        <form className='formdis'>
            <h2 >Add Expense</h2>
            <p >Enter your expense details below</p>
            <input type='text' placeholder='Enter expense name' className='inputdis'/>
            <input type='text' placeholder='Enter expense description' className='inputdis'/>
            <input type='text' placeholder='Enter expense category' className='inputdis'/>
            <input type='number' placeholder='Enter amount' className='inputdis'/>
            <input type='date' className='inputdis'/>
            <button className='btndis'>Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm