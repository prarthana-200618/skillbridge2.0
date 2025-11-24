import React, { useEffect, useRef } from 'react';

const WaveLayer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let increment = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const wave = {
            y: canvas.height / 2,
            length: 0.01,
            amplitude: 40, // Reduced from 100
            frequency: 0.005 // Slower
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            increment += wave.frequency;

            for (let i = 0; i < 3; i++) { // Reduced from 5 waves
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);

                for (let x = 0; x < canvas.width; x++) {
                    const y = canvas.height / 2 + Math.sin(x * wave.length + increment + i) * (wave.amplitude + i * 10) * Math.sin(increment);
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = `rgba(212, 175, 55, ${0.05 - i * 0.01})`; // Subtle gold
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
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
                zIndex: -2, // Middle layer
                pointerEvents: 'none',
            }}
        />
    );
};

export default WaveLayer;
