import React from 'react';


const Header = () => {
    return(
    <div className="headerContent">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="./assets/images/GMIcon.png" width="30" height="30"/><a className="navbar-brand" >Go Meet</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >About us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Conferences</a>
          <a className="dropdown-item" >Meet ups</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" >And More..</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link " >Contact us</a>
      </li>
    </ul>
    
  </div>
</nav>
  </div>
    )
}


export default Header;