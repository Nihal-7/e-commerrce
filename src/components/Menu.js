import React from 'react'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#">mini-Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" size="70"/>
        <button className="btn btn-outline-success" type="submit">Search </button>
      </form>
      
      
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
   
      <ul className="navbar-nav  ">
        <li className="nav-item mx-3 ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link " href="#">Add Product</a>
        </li>
        <li className="nav-item dropdown">
          <button className="btn btn-outline-success"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Log in
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button type="button" className="btn btn-primary mx-2 remove-border">Sign Up</button></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
