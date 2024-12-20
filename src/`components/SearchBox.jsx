import React from 'react'

const SearchBox = ({selectedCount ,filterCountry}) => {
    // console.log("selectedCount" , selectedCount);
  return (
    <div className='search_box'>
        <input value={selectedCount} onChange={(e) => filterCountry(e.target.value.toLowerCase())} type="text" placeholder='Search Country' />
    </div>
  )
}

export default SearchBox