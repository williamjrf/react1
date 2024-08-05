import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Mamma Mia!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  {" "}
                  <i class="fas fa-pizza-slice" />&nbsp;  Home
                </a>
              </li>
            
              {token && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-unlock-alt" />&nbsp; Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-lock" />&nbsp;  Logout
                    </a>
                  </li>
                </>
              )}
             
             {!token && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-lock" />&nbsp;  Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-lock" />&nbsp;  Register
                    </a>
                  </li>
                </>
              )}
            </ul>
            <form class="d-flex" role="">
              <button class="btn btn-outline-primary" type="button">
                <i class="fa fa-shopping-cart" /> &nbsp; Total $ {total.toLocaleString("es-CL")}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
