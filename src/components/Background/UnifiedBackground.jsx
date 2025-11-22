import React from 'react';
import PhysicsParticles from './PhysicsParticles';
import WaveLayer from './WaveLayer';
import NetworkParticles from './NetworkParticles';

const UnifiedBackground = () => {
    return (
        <>
            <PhysicsParticles />
            <WaveLayer />
            <NetworkParticles />
        </>
    );
};

export default UnifiedBackground;
