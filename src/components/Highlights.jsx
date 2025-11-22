import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Highlights.css';

const highlights = [
    "NCCPS", "ASPIRE", "NCCIPS", "Workshops", "Talk Sessions", "Interactive Gaming"
];

const Highlights = () => {
    return (
        <section id="events" className="highlights-section">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Key Highlights
                </motion.h2>

                <div className="badges-grid">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="highlight-badge glass-panel"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, borderColor: 'var(--accent-neon)' }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
