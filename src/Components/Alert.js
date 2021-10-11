import React from 'react'

function Alert(props) {
  return (
    <div className = "alert alert-danger text-color text-center" style = {{display : props.display}}>
      Please enter some value !
      <div>
        <button className = "text-color cls-btn" onClick={props.func}>Close</button>
      </div>
    </div>
  )
}

export default Alert
