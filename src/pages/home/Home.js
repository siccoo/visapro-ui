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
                            <div className="gray-border">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;