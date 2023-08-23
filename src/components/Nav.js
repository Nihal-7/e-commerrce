import React from 'react'

export default function Nav() {

  

    return (
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">mini-Cart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item my-9">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item mx-9">
                <a className="nav-link active" aria-current="page" href="#">Add Product</a>
              </li>
            
              <form className="d-flex " role="search">
                <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" size="50" />
              </form>

           
           

            </ul>
           
           


            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}

            <div className=" dropdown ">
              <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Sign in
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    )
  }
