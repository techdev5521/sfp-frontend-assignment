import React from 'react';
import PropTypes from "prop-types";
import "./Hero.css";
import heroImage from "./images/hero.png";

export default function Hero({ genre }){
    return (
        <div className="Hero">
            <header className="container-fluid">
                <div className="container">
                    <section className="row">
                        <div className="col-12">
                            <h1>{genre}</h1>
                        </div>
                        <div className="col-12">
                            <button>View List</button>
                        </div>
                    </section>
                </div>
            </header>
        </div>
    );
}

Hero.propTypes = {
    /** Genre being displayed. */
    "genre": PropTypes.string
};

Hero.defaultProps = {
    "genre": ""
};