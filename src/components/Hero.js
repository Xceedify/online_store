import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Wisdom Products</h2>
            <h3>A room without products is like a <br />body without a soul</h3>
            <Link className="btn" to="/products">View All Products</Link>
        </section>
    )
}

export default Hero
