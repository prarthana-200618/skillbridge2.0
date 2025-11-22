import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, PenTool, Cpu, Plane } from 'lucide-react';
import '../styles/WorkshopShowcase.css';

const workshops = [
    {
        id: 1,
        title: "Cloud Computing",
        icon: <Cloud size={50} />,
        desc: "Build, deploy, and scale cloud-native applications hands-on.",
        color: "#00f3ff" // Neon Cyan
    },
    {
        id: 2,
        title: "Solar Technology",
        icon: <Sun size={50} />,
        desc: "Explore modern solar design, installation, and power systems.",
        color: "#ffdd00" // Neon Yellow
    },
    {
        id: 3,
        title: "Product Design & Development",
        icon: <PenTool size={50} />,
        desc: "Learn rapid prototyping and user-centered product creation.",
        color: "#ff00ff" // Neon Magenta
    },
    {
        id: 4,
        title: "PCB Design",
        icon: <Cpu size={50} />,
        desc: "Design, simulate, and create professional-grade PCB circuits.",
        color: "#bd00ff" // Neon Purple
    },
    {
        id: 5,
        title: "Drone Technology",
        icon: <Plane size={50} />,
        desc: "Dive into flight systems, assembling, tuning, and real-flight testing.",
        color: "#ff3d00" // Neon Red/Orange
    }
];

const FlipCard = ({ workshop, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flip-card-container"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="flip-card-inner"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
            >
                {/* Front Side */}
                <div
                    className="flip-card-front glass-panel"
                    style={{
                        borderColor: `${workshop.color}40`,
                        boxShadow: `0 0 20px ${workshop.color}10`
                    }}
                >
                    <div className="workshop-icon-glow" style={{ color: workshop.color }}>
                        {workshop.icon}
                    </div>
                    <h3>{workshop.title}</h3>
                </div>

                {/* Back Side */}
                <div
                    className="flip-card-back glass-panel"
                    style={{
                        borderColor: workshop.color,
                        boxShadow: `0 0 30px ${workshop.color}20`,
                        background: `linear-gradient(135deg, rgba(12, 14, 29, 0.95), ${workshop.color}20)`
                    }}
                >
                    <h3>{workshop.title}</h3>
                    <p>{workshop.desc}</p>
                </div>
            </motion.div>
        </div>
    );
};

const WorkshopShowcase = () => {
    return (
        <section id="workshops" className="workshop-section">
            <div className="container">
                <motion.h2
                    className="section-heading-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Workshop Showcase
                </motion.h2>

                <div className="workshop-grid-center">
                    {workshops.map((workshop, index) => (
                        <FlipCard key={workshop.id} workshop={workshop} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopShowcase;
