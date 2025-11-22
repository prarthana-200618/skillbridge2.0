import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-heading-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About the Event
                </motion.h2>

                <motion.p
                    className="section-subheading"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Presented by IEEE SB CE Kallooppara
                </motion.p>

                <div className="about-single-card-container">
                    <motion.div
                        className="about-card glass-panel hover-3d"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3>About Skill Bridge 2.0</h3>
                        <p>
                            Skill Bridge 2.0 is a flagship three-day, student-led international technical conclave hosted by IEEE SB CE Kallooppara on January 23–25, 2026. Bringing together 125 of the region's most promising engineering students and tech enthusiasts, the conclave offers five intensive, parallel workshops in high-demand fields, alongside keynotes and panel discussions with industry experts. Designed as a deep-dive platform to bridge the gap between academic theory and industry-ready skills, Skill Bridge 2.0 is backed by the global network of IEEE and supported by leading tech industry partners.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
