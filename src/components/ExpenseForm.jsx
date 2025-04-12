import React,{useState} from 'react'



function ExpenseForm({expense,setExpense}) {
  const [expenseName, setexpenseName] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const [amount, setamount] = useState('')
  const [date, setdate] = useState('')

  const preventFormDefault = (event) => {
    event.preventDefault()
  }

  const handleSubmit = () => {
    

    const newExpense = {
      expense: expenseName,
      description: description,
      category: category,
      amount: amount,
      date: date,
    }
    setExpense([...expense,newExpense])
    
    setexpenseName('')
    setdescription('')
    setcategory('')
    setamount('')
    setdate('')
  }

  const handleExpenseName = (e) => {
    setexpenseName(e.target.value)
  }
  const handleDescription = (e) => {
    setdescription(e.target.value)
  }
  const handleCategory = (e) => {
    setcategory(e.target.value)
  }
  const handleAmount = (e) => {
    setamount(e.target.value)
  }
  const handleDate = (e) => {
    setdate(e.target.value)
  }

  return (
    <div className='formdiv'>
        <form className='formdis' onSubmit={preventFormDefault}>
            <h2 >Add Expense</h2>
            <p >Enter your expense details below</p>
            <input type='text' placeholder='Enter expense name' className='inputdis' onChange={handleExpenseName} value={expenseName}/>
            <input type='text' placeholder='Enter expense description' className='inputdis' onChange={handleDescription} value={description}/>
            <input type='text' placeholder='Enter expense category' className='inputdis' onChange={handleCategory} value={category}/>
            <input type='number' placeholder='Enter amount' className='inputdis' onChange={handleAmount} value={amount}/>
            <input type='date' className='inputdis' onChange={handleDate} value={date}/>
            <button className='btndis' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm