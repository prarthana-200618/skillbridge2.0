import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Target: January 23, 2026 at 9:00 AM IST
        const targetDate = new Date('2026-01-23T09:00:00+05:30');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsFinished(true);
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isFinished) {
        return (
            <motion.div
                className="countdown-finished"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                Skill Bridge 2.0 Has Started
            </motion.div>
        );
    }

    return (
        <div className="countdown-container">
            <CountdownCard value={timeLeft.days} label="DAYS" color="#FFFFFF" />
            <CountdownCard value={timeLeft.hours} label="HOURS" color="#FFFFFF" />
            <CountdownCard value={timeLeft.minutes} label="MINUTES" color="#FFFFFF" />
            <CountdownCard value={timeLeft.seconds} label="SECONDS" color="#FFFFFF" />
        </div>
    );
};

const CountdownCard = ({ value, label, color }) => (
    <motion.div
        className="countdown-card glass-panel"
        whileHover={{ scale: 1.03, boxShadow: `0 0 20px ${color}40` }}
        animate={{ boxShadow: [`0 0 10px ${color}20`, `0 0 20px ${color}40`, `0 0 10px ${color}20`] }}
        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        style={{ borderColor: `${color}40` }}
    >
        <div className="countdown-value" style={{ color: color }}>
            {String(value).padStart(2, '0')}
        </div>
        <div className="countdown-label">{label}</div>
    </motion.div>
);

export default Countdown;
