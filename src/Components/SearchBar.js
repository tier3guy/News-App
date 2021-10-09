import React from 'react'

function SearchBar() {
  return (
    <div className = "SearchBar d-flex justify-content-center mt-4">
      <div className= "input-group w-50">
        <input className= "form-control"/>
        <span className= "input-group-text btn btn-primary">Search</span>
      </div>
    </div>
  )
}

export default SearchBar
