import React from 'react';
import "./Nav.css"

const Nav = ({ handleSearchChange }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid p-2 d-flex justify-content-start">
          <a href="/" className="navbar-brand mx-4 d-flex align-items-center"><i class="fab fa-superpowers mx-2"></i> User Directory</a>
          <form className="d-flex">
            <input className="form-control me-2 rounded-pill" type="search" onChange={e => handleSearchChange(e)} placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    )
}
 
export default Nav;