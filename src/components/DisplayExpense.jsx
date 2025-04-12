import React from 'react'
import { expense } from '../data'

function Productdis({expense,description,category,amount,date,search}){
    
   return(
    <tr>
        <td>{expense}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>{date}</td>
    </tr>
   ) 
}

function DisplayExpense() {
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
            {expense.map((item,index) => (
            <Productdis 
            key={index} 
            expense={item.expense}
            description={item.description}
            category={item.category}
            amount={item.amount}
            date={item.date}
            />
            ))}

        </tbody>

    </table>
    </div>
    
  )
}

export default DisplayExpense