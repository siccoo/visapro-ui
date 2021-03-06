import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="col-md-1"></div>
                <div className="col-md-1"></div>  
                <div className="col-md-3">
                    <ul className="unorder-list">
                        <li className="list-item">
                            <Link to="/about" className="list-head">About Us</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/about" className="list-head">About Us</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/about" className="list-head">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">

                </div>
            </section>
        </div>
    )
}

export default Footer;