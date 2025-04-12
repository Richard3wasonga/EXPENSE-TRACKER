import React from 'react'
import { expense } from '../data'

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

function DisplayExpense({ search }) {
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