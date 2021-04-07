import React from 'react';

const Nav = ({ handleSearchChange }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid p-2 d-flex justify-content-start">
          <a href="/" className="navbar-brand mx-4">User Directory</a>
          <form className="d-flex">
            <input className="form-control me-2 rounded-pill" type="search" onChange={e => handleSearchChange(e)} placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    )
}
 
export default Nav;