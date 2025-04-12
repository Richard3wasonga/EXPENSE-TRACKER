import React,{useState} from 'react'
import DisplayExpense from './DisplayExpense'
import SerachBar from './SerachBar'



function SearchExchange({expense}) {
    const [Search, setSearch] = useState("")
  return (
    <div>
        <SerachBar search={Search} setSearch={setSearch}/>
        <DisplayExpense search={Search} expense={expense}/>
    </div>
  )
}

export default SearchExchange