import React from "react";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";
import "./css/Header.css";
import "./css/main.css";
import Logo from "./img/logo.jpg";

function Headerr() {
  return (
    <div>
      <div className='main_content_iner'>
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
                  {/* <li class='nav-item'>
                    <a class='nav-link active' aria-current='page' href='#'>
                      <Link to='/allbutton'> All Buttons</Link>
                    </a>
                  </li> */}
                  {/* <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      <Link to='/'>Register</Link>
                    </a>
                  </li> */}
                  <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      <Link to='/login'>Login</Link>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      {/* <Link to='/Updatetutors'>Update Tutors</Link> */}
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      {/* <Link to='/datatable'>Datatable</Link> */}
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                      {/* <Link to='/DataTableTuytors'>tutor data table try</Link> */}
                    </a>
                  </li>
                </ul>
                <form class='d-flex'>
                  <input class='form-control ' type='search' placeholder='Search' aria-label='Search' />
                  <button class='btn btn-outline' id='search' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <a id='anav' class='sidemenu'>
            <Link to='/Updatetutors'> Tutor </Link>
          </a>

          <a class='sidemenu'>
            <Link to='/updateotm'> OTM Member</Link>
          </a>
          {/* <a href='#services' class='sidemenu'>
            <Link to='/Assingntask'>Assign Task</Link>
          </a> */}
          <a class='sidemenu'>
            <Link to='/UpdateClientdata'>Clients</Link>
          </a>
          <a class='sidemenu'>
            <Link to='/Updatebudget'>Budget</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Headerr;
