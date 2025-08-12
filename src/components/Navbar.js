import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>

     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
           
            <li><Link key="business" className="dropdown-item" to="business">Business</Link></li>
            <li><Link key="entertainment" className="dropdown-item" to="entertainment">Entertainment</Link></li>
            <li><Link key="general" className="dropdown-item" to="/">General</Link></li>
            <li><Link key="health" className="dropdown-item" to="health">Health</Link></li>
            <li><Link key="science" className="dropdown-item" to="science">Science</Link></li>
            <li><Link key="sports" className="dropdown-item" to="sports">Sports</Link></li>
            <li><Link key="technology" className="dropdown-item" to="technology">Technology</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
      </div>
    )
  }
}
