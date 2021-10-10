import React from 'react'

function Offcanva(props) {
  return (
    <div>
      <div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasBottomLabel">{props.title}</h3>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body large">
          {props.description}
          <div className = "mt-4">
            <a target = "_blank" href = {props.url} className = "text-color btn btn-primary">Read Original Article</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offcanva
