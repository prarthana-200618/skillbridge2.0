import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="navbar-container">
                <div className="logo">
                    <span className="logo-text">Skill Bridge <span className="logo-highlight">2.0</span></span>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#workshops">Workshop</a></li>
                    <li><a href="#organizers">Organiser</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="register-btn-nav magnetic-btn" onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}>Register</button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
