import React from 'react';

const Nav = ({ handleSearchChange }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid p-2 d-flex justify-content-start">
          <a href="/" className="navbar-brand">User Directory</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" onChange={e => handleSearchChange(e)} placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    )
}
 
export default Nav;