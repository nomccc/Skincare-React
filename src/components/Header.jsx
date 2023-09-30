// import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-sm bg-light px-3 shadow">
      <span className="navbar-text h5">Simple Header</span>
      <ul className="navbar-nav ms-auto d-flex align-items-center ">
        <li className="nav-item">
        <Link className="mx-2 text-decoration-none $gray-600" to={'/landingPage'}> Home </Link>
        </li>
        <li className="nav-item">
            Feature
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header