import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

import UK from "../../images/UK.jpg";
import FR from "../../images/FR.jpg";
import DUB from "../../images/DUB.jpg";
import Easy from "../../images/communication.jpg";
import Support from "../../images/customer support.jpg";
import Track from "../../images/progress.jpg";
import Secure from "../../images/secure.jpg";
import ColImg from "../../images/Component3.svg";
import ColImg2 from "../../images/Testimonial.svg";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Home = () => {
    useEffect(() => {
        document.title = "Visapro | Travel anywhere in the world...";
    }, []);
    return (
        <div>
            <section className="header">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>The world is yours to explore</h1>
                            <div className="gray-border align-middle">
                                <form>
                                    <div className="form-row align-self-center">
                                        <div className="col-auto">
                                            <select className=" mx-sm-2" id="">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto">
                                            <select className=" mx-sm-2" id="">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn-header">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Top destinations</h3>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-md-3">
                            <div className="img-box">
                                <img src={UK} alt="home1-img" className="img-fluid home1-img" />
                                <div className="txt-box">
                                    <h6>United Kingdom</h6>
                                    <Link to="/" className="p">
                                        Learn More <FiChevronRight /> 
                                    </Link>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={FR} alt="home1-img" className="img-fluid home1-img" />
                                <div className="txt-box">
                                    <h6>France</h6>
                                    <Link to="/" className="p">
                                        Learn More <FiChevronRight /> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={DUB} alt="home1-img" className="img-fluid home1-img" />
                                <div className="txt-box">
                                    <h6>Dubai</h6>
                                    <Link to="/" className="p">
                                        Learn More <FiChevronRight /> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={DUB} alt="home1-img" className="img-fluid home1-img" />
                                <div className="txt-box">
                                    <h6>Dubai</h6>
                                    <Link to="/" className="p">
                                        Learn More <FiChevronRight /> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="round">
                        <p>View More</p>
                        <div className="circle"> <FiChevronDown className="arrow-downward" /> </div>
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Why use Visapro</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={Easy} alt="home2-img" className="img-fluid home2-img" /> 
                                <p>Easy to use</p>  
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={Support} alt="home2-img" className="img-fluid home2-img" /> 
                                <p>Reliable support</p>  
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={Track} alt="home2-img" className="img-fluid home2-img" /> 
                                <p>Track visa process</p>  
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="img-box">
                                <img src={Secure} alt="home2-img" className="img-fluid home2-img" /> 
                                <p>Secure payment</p>  
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <Link to="/" className="btn">
                                Apply Now  
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={ColImg} alt="home3-img" className="home3-img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={ColImg2} alt="home3-img2" className="home3-img2" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 left-col">
                            <h1>Get in Touch</h1>
                            <p>Get in touch with us. We normally respond within the hour.</p>

                        </div>
                        <div className="col-md-6 right-col">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;