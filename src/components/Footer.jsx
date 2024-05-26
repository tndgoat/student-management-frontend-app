import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className='text-start'>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-bottom">
            <p className="col-md-4 mb-0 text-muted">© All right reserved @tndgoat</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
