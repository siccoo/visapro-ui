import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

import LinkedIn from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>  
                        <div className="col-md-2">
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
                        <div className="col-md-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-7"><hr /></div>
                        <div className="col-md-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="mobileHide">
                                <a href=' https://www.facebook.com/' target='_blank' rel="noreferrer" >
                                    <img src={LinkedIn} alt="alternative" className="footer-img" />
                                </a>
                                <a href=' https://twitter.com/' target='_blank' rel="noreferrer" >
                                    <img src={Twitter} alt="alternative" className="footer-img" />
                                </a>
                                <a href=' https://www.facebook.com/salesruby/?ref=br_rs' target='_blank' rel="noreferrer" >
                                    <img src={Instagram} alt="alternative" className="footer-img" />
                                </a>
                                <a href=' https://twitter.com/SalesRubyNG' target='_blank' rel="noreferrer" >
                                    <img src={Facebook} alt="alternative" className="footer-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;