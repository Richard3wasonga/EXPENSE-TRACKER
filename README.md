# **Expense Tracker App**

This project is a simple Expense Tracker built with React. It allows users to add, display, and filter expense entries in a table format. The goal is to practice state management, component communication, and form handling using React Hooks.



---



## **Installation**

Access the live application here: [Live Link](https://expense-tracker-six-chi-98.vercel.app/)

1. Clone this repository:
   ```bash
   git clone https://github.com/Richard3wasonga/EXPENSE-TRACKER
   ```
2. Navigate to project directory:
   ```bash
   cd expense-traker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev
   ```
   The app would be available at `http://localhost:3000` after
   starting the development server.



---




## **How the Application works

### **ExpenseForm.jsx**

This component handles the creation of new expenses through a controlled form.

Features:

- Collect input for:

   - Expense Name

   - Description

   - Category

   - Amount

   - Date

-  On form submission:

    - Prevents default form behavior.

    - Update the parent state with the new expense.

    - Clears the form for new input.


```jsx
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

```


---



### **DisplayExpense.jsx**

This component displays a dynamic list of expenses in a clean table format, along with basic filtering.

Features:

- Display expenses in a table layout.

- Accepts `search` prop to filter expenses by thier name.

- Display a message when no expenses match the search criteria.

```jsx
import React from 'react'


function Productdis({ expense, description, category, amount, date }) {
  return (
    <tr>
      <td>{expense}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  )
}

function DisplayExpense({ expense,search }) {
  const searchTerm = search?.toLowerCase() || ''

  const filteredExpenses = expense.filter((item) =>
    item.expense.toLowerCase().includes(searchTerm) || searchTerm === ''
  )

  return (
    <div className='tabledis'>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          
           {filteredExpenses.length > 0 ? ( 
            filteredExpenses.map((item, index) => (
              <Productdis
                key={index}
                expense={item.expense}
                description={item.description}
                category={item.category}
                amount={item.amount}
                date={item.date}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5">No matching expenses</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayExpense

```


---



## **Project Structure**

```
src/
  - components/
    - ExpeseForm.jsx
    - DisplayExpense.jsx
  - App.jsx
- Package.json
- README.md

```


## **App Structure Example**

```JSX
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

```



---



## **Features Overview**

- Add new expense via a form.
- Display expenses in a table.
- Filter expenses by name using a search field.
- Auto-clear form input after submission
- Responsive ul elements



---



## **Technologies Used**

- React(Hooks & Functional components)

- Javascript ES6+

- HTML & CSS



---



## **Future Improvements**

- I ntegrate with backend APIs of local storage for persistent 
  data.
- Add input validation (e.g valid dates,valid amount)


---


## **Authors**
- Richard Wasonga - [GitHub Profile](https://github.com/Richard3wasonga)


## **Contributors**
- Bob Oyier - [GitHub Profile](https://github.com/oyieroyier)

---

## **License**

This project is open-source and available under the MIT License.