import React,{useState} from 'react'
import DisplayExpense from './DisplayExpense'
import SerachBar from './SerachBar'



function SearchExchange() {
    const [Search, setSearch] = useState("row")
  return (
    <div>
        <SerachBar search={Search}/>
        <DisplayExpense search={Search}/>
    </div>
  )
}

export default SearchExchange