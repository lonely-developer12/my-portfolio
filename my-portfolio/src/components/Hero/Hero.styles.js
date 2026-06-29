import styled, { keyframes } from 'styled-components';

// Animacija treptanja kursora
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Animacija linije skeniranja
const scanline = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

// Animacija glitch efekta
const glitch = keyframes`
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
`;

// Sekcija hero sadržaja
export const HeroSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin-top: -80px;

  @media (max-width: 768px) {
    margin-top: -120px;
  }
`;

// Sadržaj hero sekcije
export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  z-index: 1;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 120px;
  }
`;

// Stilizovani terminal prozor
export const TerminalWindow = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
  z-index: 2;
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  position: relative;
  overflow: hidden;
`;

// Zaglavlje terminala sa dugmadima
export const TerminalHeader = styled.div`
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}40;

  .buttons {
    display: flex;
    gap: 0.5rem;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;

      &:nth-child(1) { background: #ff5f56; } // Crveno - Zatvori
      &:nth-child(2) { background: #ffbd2e; } // Žuto - Minimiziraj
      &:nth-child(3) { background: #27c93f; } // Zeleno - Maksimiziraj
    }
  }

  .title {
    flex: 1;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.9rem;
  }
`;

// Tijelo terminala sa efektima
export const TerminalBody = styled.div`
  padding: 2rem;
  min-height: 400px;
  position: relative;
  background: rgba(0, 0, 0, 0.8);

  // Efekat horizontalnih linija na ekranu
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 65, 0.03) 0px,
      rgba(0, 255, 65, 0.03) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }

  // Efekat skeniranja preko ekrana
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 255, 65, 0.2) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }
`;

// Stilizovani tekst unutar terminala
export const TerminalText = styled.pre`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40;
`;

// Linija unosa terminala
export const TerminalPrompt = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  display: flex;
  align-items: center;
`;

// Kursor terminala sa efektom treptanja
export const TerminalCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 4px;
  animation: ${blink} 1s step-end infinite;
`;

// Kontejner za dugmad
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary}20;
      box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
      animation: ${glitch} 0.3s infinite;

      // Glitch efekat - crvena senka
      &::before {
        content: attr(data-text);
        position: absolute;
        left: 2px;
        text-shadow: -2px 0 #ff003c;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: ${glitch} 2s infinite linear alternate-reverse;
      }

      // Glitch efekat - plava senka
      &::after {
        content: attr(data-text);
        position: absolute;
        left: -2px;
        text-shadow: 2px 0 #0ff;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: ${glitch} 3s infinite linear alternate-reverse;
      }
    }
  }
`;
