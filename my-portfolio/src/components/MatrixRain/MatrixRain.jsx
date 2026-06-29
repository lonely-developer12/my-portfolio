import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Stilizovani <canvas> element koji prekriva cijeli ekran
const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
  background: transparent;
`;

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Funkcija za promjenu veličine platna prema prozoru
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simboli koji se koriste za padanje matriksa
    const matrix = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const characters = matrix.split('');

    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    const maxSpeed = 2;

    // Funkcija koja crta matriks efekt
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Lagano zatamnjenje ekrana
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Svijetlija zelena boja za bolju vidljivost
        const brightness = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, 255, 70, ${brightness})`;

        // Nasumična varijacija u x-poziciji za prirodniji izgled
        const x = i * fontSize + (Math.random() * 2 - 1);

        ctx.fillText(char, x, drops[i] * fontSize);

        // Resetovanje kapljica i nasumična brzina
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * maxSpeed;
      }
    };

    // Brža stopa ažuriranja
    const interval = setInterval(draw, 25);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default MatrixRain;
