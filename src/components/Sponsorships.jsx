import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Sponsorships.css';

const Sponsorships = () => {
    return (
        <section id="sponsors" className="sponsorships-section">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Sponsors
                </motion.h2>

                <div className="sponsors-grid">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            className="sponsor-placeholder glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: item * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--color-glow-1-top)' }}
                        >
                            <span className="coming-soon">Coming Soon</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsorships;
