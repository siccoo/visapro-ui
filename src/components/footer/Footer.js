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
                            <Link to="/contact" className="list-head">Contact us</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/about" className="list-head">About us</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/mission" className="list-head">Our mission</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="unorder-list">
                        <li className="list-item">
                            <Link to="/address" className="list-head">Contact us</Link>
                        </li>
                    </ul>
                    <p>3, oladele close off makarios street,
Ajah, Lagos,
Nigeria</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;