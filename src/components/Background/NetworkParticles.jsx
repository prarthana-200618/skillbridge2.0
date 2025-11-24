import React, { useEffect, useRef } from 'react';

const NetworkParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = 10;
        let mouse = { x: -1000, y: -1000 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor(x, y) {
                this.x = x || Math.random() * canvas.width;
                this.y = y || Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5; // Smaller
                this.speedX = Math.random() * 1.5 - 0.75; // Slower
                this.speedY = Math.random() * 1.5 - 0.75;
                this.color = '#D4AF37'; // Classic gold
                this.opacity = Math.random() * 0.2 + 0.1; // More subtle
            }

            update() {
                // Mouse Attraction (Grab Mode)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    this.x += dx * 0.05;
                    this.y += dy * 0.05;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce from edges
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }

            draw() {
                ctx.fillStyle = `rgba(125, 25, 89, ${this.opacity})`;
                ctx.strokeStyle = '#00f3ff'; // Neon blue outline
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleClick = (e) => {
            // Spawn 4 new particles
            for (let i = 0; i < 4; i++) {
                const p = new Particle(e.clientX, e.clientY);
                p.speedX = Math.random() * 10 - 5; // Burst speed
                p.speedY = Math.random() * 10 - 5;
                particles.push(p);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Connect particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 160) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(236, 42, 59, ${0.4 - distance / 160})`; // Neon red-pink
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
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
                zIndex: -1, // Top background layer
                pointerEvents: 'none', // Let clicks pass through to Physics layer if needed, but we need to capture clicks for spawn...
                // Wait, if pointerEvents is none, we can't capture clicks on THIS canvas.
                // But we added window event listeners, so it's fine.
            }}
        />
    );
};

export default NetworkParticles;
