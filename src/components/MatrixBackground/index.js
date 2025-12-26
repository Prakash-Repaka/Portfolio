import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000000;
`;

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const draw = () => {
            // Darker background clear (0.1) to fade syntax faster -> "More Black"
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            // Much darker/subtle green
            ctx.fillStyle = '#003308';
            ctx.font = '14px JetBrains Mono';

            for (let i = 0; i < drops.length; i++) {
                // Randomly skip columns to reduce density
                if (Math.random() > 0.3) {
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    ctx.fillText(text, i * 20, drops[i] * 20);
                }

                if (drops[i] * 20 > height && Math.random() > 0.99) { // slower reset
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-initialize drops on resize to avoid gaps
            const newColumns = Math.floor(width / 20);
            const currentLength = drops.length;
            if (newColumns > currentLength) {
                for (let i = currentLength; i < newColumns; i++) {
                    drops[i] = 1;
                }
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <Canvas ref={canvasRef} />;
};

export default MatrixBackground;
