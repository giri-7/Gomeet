import React from 'react';


const Header = () => {
    return(
    <div className="headerContent">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="./assets/images/GMIcon.png" width="30" height="30" alt="GMIcon" /><a className="navbar-brand" href="/">Go Meet</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" >About us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Conferences</a>
          <a className="dropdown-item" href="/">Meet ups</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">And More..</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact us</a>
      </li>
    </ul>
    
  </div>
</nav>
  </div>
    )
}


export default Header;