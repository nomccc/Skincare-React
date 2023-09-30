import React from 'react'

const Alert = () => {
  return (
    <div
    id="showData"
    className="alert alert-warning alert-dismissible fade sticky-md-top text-center"
    role="alert"
  >
    <p id="alertDataProduct"></p>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
  )
}

export default Alert