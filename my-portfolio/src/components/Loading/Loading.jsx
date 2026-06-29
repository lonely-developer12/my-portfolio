import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animacija koja simulira padanje matriks koda
const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

// Animacija treptanja kursora
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Glavni kontejner koji prekriva cijeli ekran
const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

// Pozadinski efekat sa binarnim kodom
const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.primary || '#0F0'};
  display: flex;

  span {
    animation: ${matrixRain} 2s linear infinite;
    white-space: nowrap;
    display: inline-block;
  }
`;

// Funkcija koja generiše nasumične binarne kolone
const generateMatrixColumns = () => {
  const columns = [];
  for (let i = 0; i < 40; i++) {
    const binaryText = Array(20)
      .fill(0)
      .map(() => (Math.random() > 0.5 ? '1' : '0'))
      .join('');
    columns.push(<span key={i}>{binaryText}</span>);
  }
  return columns;
};

// Tekst koji prikazuje poruku "System Loading" sa efektom treptanja
const LoadingText = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors?.primary || '#0F0'};
  text-transform: uppercase;
  letter-spacing: 0.5em;
  position: relative;
  z-index: 1;

  &::after {
    content: '_';
    animation: ${blink} 1s step-end infinite;
  }
`;

// Glavna komponenta za prikaz učitavanja
const Loading = () => (
  <LoadingContainer>
    <MatrixBackground>{generateMatrixColumns()}</MatrixBackground>
    <LoadingText>System Loading</LoadingText>
  </LoadingContainer>
);

export default Loading;
