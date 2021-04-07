import React from 'react';
import "./Nav.css"

const Nav = ({ handleSearchChange }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid p-2 d-flex justify-content-start">
          <a href="/" className="navbar-brand mx-4 d-flex align-items-center"><i class="fab fa-superpowers mx-2"></i> User Directory</a>
          <form className="d-flex align-items-center">
          <input className="form-control me-2 rounded-pill search" type="search" placeholder="Search users..." onChange={e => handleSearchChange(e)} aria-label="Search" /> 
          <i class="fas fa-search"></i>
          </form>
        </div>
      </nav>
    )
}
 
export default Nav;