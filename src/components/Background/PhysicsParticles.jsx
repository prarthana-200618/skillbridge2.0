import React, { useEffect, useRef } from 'react';

const PhysicsParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = 15;
        let mouse = { x: -1000, y: -1000 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor(x, y, isExplosion = false) {
                this.x = x || Math.random() * canvas.width;
                this.y = y || Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5; // Smaller particles
                this.baseSize = this.size;
                this.hue = Math.random() * 30 + 35; // 35-65 (Gold range)
                this.speedX = Math.random() * 0.5 - 0.25; // Slower movement
                this.speedY = Math.random() * 0.5 - 0.25;
                this.life = isExplosion ? 100 : Infinity;
                this.isExplosion = isExplosion;
                this.opacity = isExplosion ? 0.6 : Math.random() * 0.2 + 0.1; // More subtle
                this.pulseSpeed = Math.random() * 0.02 + 0.005; // Slower pulse
                this.pulse = 0;
            }

            update() {
                // Pulse size
                this.pulse += this.pulseSpeed;
                this.size = this.baseSize + Math.sin(this.pulse) * 1;

                // Gravity towards center (weak)
                if (!this.isExplosion) {
                    const dx = canvas.width / 2 - this.x;
                    const dy = canvas.height / 2 - this.y;
                    this.speedX += dx * 0.00005;
                    this.speedY += dy * 0.00005;
                }

                // Mouse Repel
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (150 - distance) / 150;
                    const directionX = forceDirectionX * force * 2; // Repel strength
                    const directionY = forceDirectionY * force * 2;
                    this.speedX -= directionX;
                    this.speedY -= directionY;
                }

                // Movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Friction
                this.speedX *= 0.99;
                this.speedY *= 0.99;

                // Life for explosion particles
                if (this.isExplosion) {
                    this.life--;
                    this.opacity -= 0.01;
                }

                // Wrap around (only non-explosion)
                if (!this.isExplosion) {
                    if (this.x < 0) this.x = canvas.width;
                    if (this.x > canvas.width) this.x = 0;
                    if (this.y < 0) this.y = canvas.height;
                    if (this.y > canvas.height) this.y = 0;
                }
            }

            draw() {
                if (this.life <= 0) return;
                ctx.shadowBlur = 20;
                ctx.shadowColor = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
                ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Interactions
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleClick = (e) => {
            // Explosion
            for (let i = 0; i < 20; i++) {
                const p = new Particle(e.clientX, e.clientY, true);
                p.hue = Math.random() * 60 + 30; // Yellow/Orange
                p.speedX = Math.random() * 6 - 3;
                p.speedY = Math.random() * 6 - 3;
                particles.push(p);
            }
        };

        const handleDoubleClick = (e) => {
            for (let i = 0; i < 5; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        window.addEventListener('dblclick', handleDoubleClick);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.strokeStyle = 'rgba(189, 0, 255, 0.1)'; // Neon purple low opacity
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.life <= 0) {
                    particles.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            window.removeEventListener('dblclick', handleDoubleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -3, // Deepest layer
                pointerEvents: 'auto', // Needs to capture clicks
            }}
        />
    );
};

export default PhysicsParticles;
