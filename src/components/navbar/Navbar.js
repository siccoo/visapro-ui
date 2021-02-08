import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import VisaproLogo from "../../images/VisaproLogo.svg";

const Topbar = () => {
    return (
        <div>
            <section className="nav-section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <a className="navbar-brand" href="/">
                    <img src={VisaproLogo} className="home-logo" alt="home-logo" />
                </a>
                <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="line"></span> 
                    <span className="line"></span> 
                    <span className="line"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                            >
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                            >
                            Contact us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/faq"
                            >
                            FAQ's
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-btn"
                                to="/user"
                            >
                            Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>
        </div>
    )
}

export default Topbar;