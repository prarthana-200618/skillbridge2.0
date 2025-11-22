import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    Contact Us
                </motion.h2>
                <p className="section-subheading">Get in Touch with the Skill Bridge 2.0 Team</p>

                <div className="contact-layout">
                    {/* Left Column */}
                    <div className="contact-col-left">
                        <motion.div
                            className="venue-card glass-panel"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Venue</h3>
                            <div className="venue-content">
                                <p>College of Engineering Kallooppara</p>
                                <p>Kadamankulam P.O, Pathanamthitta, Kerala, India – 689583</p>
                                <a
                                    href="https://maps.google.com/?q=College+of+Engineering+Kallooppara"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="map-btn"
                                >
                                    <MapPin size={18} /> View on Google Maps
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="follow-card glass-panel"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>Follow Us</h3>
                            <div className="social-buttons">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn-premium magnetic-btn">
                                    <Instagram size={20} /> Instagram
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn-premium magnetic-btn">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="contact-col-right">
                        <motion.div
                            className="contact-person-card glass-panel"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="person-header">
                                <h3>Thomas Jacob</h3>
                                <span className="role-badge">Event Coordinator</span>
                            </div>
                            <div className="person-details">
                                <div className="detail-row">
                                    <Mail size={16} /> <span>thomasjacob@ieee.org</span>
                                </div>
                                <div className="detail-row">
                                    <Phone size={16} /> <span>8281453733</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-person-card glass-panel"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="person-header">
                                <h3>Prarthana R Nair</h3>
                                <span className="role-badge">Event Coordinator</span>
                            </div>
                            <div className="person-details">
                                <div className="detail-row">
                                    <Mail size={16} /> <span>rprarthana200618@gmail.com</span>
                                </div>
                                <div className="detail-row">
                                    <Phone size={16} /> <span>9633042483</span>
                                </div>
                            </div>
                            <p className="emergency-note">Available 24/7 during the event for security, medical, and technical emergencies.</p>
                        </motion.div>
                    </div>
                </div>

                <footer className="footer">
                    <p>&copy; 2026 IEEE SB CEK. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
