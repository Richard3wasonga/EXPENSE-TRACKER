import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SerachBar() {
  return (
    <form>
        <input type="text" placeholder='Search expenses' className='searchbar'/>
        <button className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  )
}

export default SerachBar