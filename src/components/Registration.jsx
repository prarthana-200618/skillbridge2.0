import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import '../styles/Registration.css';

const Registration = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRegister = (tier) => {
        setSelectedTier(tier);
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setShowModal(false);
            setSubmitted(false);
            setSelectedTier(null);
        }, 3000);
    };

    return (
        <section id="register" className="registration-section">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Registration
                </motion.h2>

                <div className="pricing-grid">
                    <motion.div
                        className="pricing-card glass-panel"
                        whileHover={{ y: -10, borderColor: 'var(--color-glow-3-top)' }}
                    >
                        <div className="tier-badge">EARLY BIRD</div>
                        <h3>IEEE Members</h3>
                        <div className="price">₹699</div>
                        <h3>Non-IEEE</h3>
                        <div className="price">₹799</div>
                        <button className="register-btn" onClick={() => handleRegister('Early Bird')}>Register Now</button>
                    </motion.div>

                    <motion.div
                        className="pricing-card glass-panel"
                        whileHover={{ y: -10, borderColor: 'var(--color-glow-4-top)' }}
                    >
                        <div className="tier-badge">REGULAR</div>
                        <h3>IEEE Members</h3>
                        <div className="price">₹899</div>
                        <h3>Non-IEEE</h3>
                        <div className="price">₹999</div>
                        <button className="register-btn" onClick={() => handleRegister('Regular')}>Register Now</button>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content glass-panel"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <button className="close-btn" onClick={() => setShowModal(false)}><X /></button>

                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <h3>Register for {selectedTier}</h3>
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="College" required />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Year" required />
                                        <input type="text" placeholder="Branch" required />
                                    </div>
                                    <button type="submit" className="submit-btn">Confirm Registration</button>
                                </form>
                            ) : (
                                <div className="success-message">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <Check size={60} color="var(--color-glow-4-top)" />
                                    </motion.div>
                                    <h3>Registration Successful!</h3>
                                    <p>See you at Skill Bridge 2.0</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Registration;
