import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
      <Link
        activeClass="active"
        to="app"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="navbar-brand js-scroll-trigger"
      >
        PhD Paweł Marciniak
      </Link>
      <button 
        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <Link
              activeClass="active"
              to="forStudents"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              For students
            </Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <Link
              activeClass="active"
              to="officeHours"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              Office hours
            </Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar