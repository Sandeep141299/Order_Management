import React from "react";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";
import "./css/Header.css";
import "./css/main.css";
import Logo from "./img/logo.jpg";

function Header() {
  return (
    <div>
      <div>
        <div class='sidenav'>
          <nav class='navbar navbar-expand-sm ' id='navbar'>
            <div class='container-fluid'>
              <a class='navbar-brand' href='#'>
                <img src={Logo} alt='BigCo Inc. logo' id='logo' />
              </a>

              <a class='navbar-brand' href='#'></a>

              <div class='collapse navbar-collapse'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li class='nav-item'>
                    <a class='nav-link active' aria-current='page' href='#'>
                      <Link to='/home'> Home </Link>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      <Link to='/'> Resister </Link>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      <Link to='/login'> login</Link>
                    </a>
                  </li>
                </ul>
                <form class='d-flex'>
                  <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                  <button class='btn btn-outline' id='search' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
