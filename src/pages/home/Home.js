import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

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
                            <div className="gray-border ">
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
        </div>
    )
}

export default Home;