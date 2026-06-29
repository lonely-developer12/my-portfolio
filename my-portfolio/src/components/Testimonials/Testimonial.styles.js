import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const glitch = keyframes`
  0% { clip-path: inset(50% 0 30% 0); }
  20% { clip-path: inset(15% 0 65% 0); }
  40% { clip-path: inset(80% 0 5% 0); }
  60% { clip-path: inset(25% 0 60% 0); }
  80% { clip-path: inset(70% 0 20% 0); }
  100% { clip-path: inset(50% 0 30% 0); }
`;

const matrixGlow = keyframes`
  0% { text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
                    0 0 20px ${({ theme }) => theme.colors.primary},
                    0 0 30px ${({ theme }) => theme.colors.primary}; }
  50% { text-shadow: 0 0 15px ${({ theme }) => theme.colors.primary},
                     0 0 25px ${({ theme }) => theme.colors.primary},
                     0 0 35px ${({ theme }) => theme.colors.primary}; }
  100% { text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
                      0 0 20px ${({ theme }) => theme.colors.primary},
                      0 0 30px ${({ theme }) => theme.colors.primary}; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const hologramScan = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

export const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  overflow: hidden;
`;

export const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  &::before {
    content: '01010101';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Matrix Code NFI', monospace;
    font-size: 1.2rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary}20;
    animation: ${matrixRain} 20s linear infinite;
  }
`;

export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  padding: 2rem 0;
  letter-spacing: 2px;
  animation: ${matrixGlow} 2s ease-in-out infinite;
  z-index: 1;
  
  .cursor {
    animation: ${blink} 1s step-end infinite;
    font-weight: 100;
    margin-left: 2px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
                0 0 20px ${({ theme }) => theme.colors.primary};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media (min-width: 768px) {
    &::before,
    &::after {
      width: 300px;
    }
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

export const TestimonialCard = styled.div`
  background: rgba(0, 20, 0, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(0, 255, 65, 0.1),
      transparent
    );
    animation: ${hologramScan} 4s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 255, 65, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
    
    &::after {
      transform: translateX(100%);
    }

    animation: ${glitch} 0.3s linear;
  }
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  .quote-mark {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
  }
`;

export const Author = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  .prefix {
    opacity: 0.7;
  }
`;

export const Role = styled.div`
  color: ${({ theme }) => theme.colors.primary}CC;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;

  .prefix {
    opacity: 0.7;
  }
`;