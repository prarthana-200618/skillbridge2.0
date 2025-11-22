import React from 'react';
import { motion } from 'framer-motion';
import '../styles/OrganizedBy.css';

const OrganizedBy = () => {
    return (
        <section id="organizers" className="organized-section">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Organized By
                </motion.h2>

                <div className="organizers-grid-2">
                    <motion.div
                        className="organizer-card glass-panel hover-3d"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3>Institution</h3>
                        <div className="org-content">
                            <h4>College of Engineering Kallooppara</h4>
                            <p>Kallooppara, Pathanamthitta, Kerala</p>
                            <a href="https://www.cek.ac.in/" target="_blank" rel="noreferrer" className="org-link">www.cek.ac.in</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="organizer-card glass-panel hover-3d"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>IEEE Student Branch</h3>
                        <div className="org-content">
                            <h4>IEEE SB CEK</h4>
                            <p>Established in 2009, our student branch provides specialized resources, technical activities, and networking opportunities through various professional societies.</p>
                            <a href="https://ieee.cek.ac.in" target="_blank" rel="noreferrer" className="org-link">ieee.cek.ac.in</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OrganizedBy;
