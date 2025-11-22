import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Countdown from './Countdown';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Skill Bridge <span className="hero-highlight">2.0</span>
                </motion.h1>

                <motion.div
                    className="hero-date-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="date-display">
                        <Calendar className="calendar-icon" />
                        <span>23–25 January, 2026</span>
                    </div>

                    <Countdown />
                </motion.div>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <button
                        className="btn-primary magnetic-btn"
                        onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="btn-text">Register Now</span>
                        <div className="blob"></div>
                    </button>
                    <button
                        className="btn-secondary magnetic-btn"
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
