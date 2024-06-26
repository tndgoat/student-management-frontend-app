import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <span className="fs-4">Student Managment</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">tndgoat</a></li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
