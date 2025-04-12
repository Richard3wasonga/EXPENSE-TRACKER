import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function searchPrevent(event){
  event.preventDefault()

}
function SerachBar({search,setSearch}) {
  const handleNewSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <form onSubmit={searchPrevent}>
        <input type="text" placeholder='Search expenses' className='searchbar' value={search} onChange={handleNewSearch}/>
        <button className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  )
}

export default SerachBar