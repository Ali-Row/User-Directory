import React from 'react';
import "./Nav.css"

const Nav = ({ handleSearchChange }) => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid p-2 d-flex justify-content-start">

          <a href="/" className="navbar-brand mx-1 d-flex align-items-center"><img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" className="logo mx-2" alt="logo"/></a>
          <form className="d-flex align-items-center nav-form d-flex justify-content-end">
            <input className="form-control me-2 rounded-pill search mx-1" type="search" placeholder="Search users..." onChange={e => handleSearchChange(e)} aria-label="Search" /> 
            <i class="fas fa-search mx-4"></i>
          </form>

        </div>
      </nav>
    )
}
 
export default Nav;