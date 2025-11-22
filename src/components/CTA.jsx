import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-frame glass-panel"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ boxShadow: '0 0 40px rgba(236, 42, 59, 0.3)' }}
                >
                    <div className="urgency-pulse"></div>

                    <h2 className="cta-heading">Secure Your Spot in Skill Bridge 2.0</h2>
                    <p className="cta-sub">Limited Seats Available</p>

                    <button
                        className="apply-btn magnetic-btn"
                        onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Apply Now
                        <div className="particle-burst"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
