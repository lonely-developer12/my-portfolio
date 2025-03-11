import styled, { keyframes } from 'styled-components';

// Animacija kiše za Matrix efekat
const matrixRain = keyframes`
  0% { transform: translateY(-100%); } /* Početna pozicija */
  100% { transform: translateY(100%); } /* Kraj pozicije */
`;

// Animacija treptanja
const glitch = keyframes`
  0% { clip-path: inset(50% 0 30% 0); } /* Početna pozicija */
  20% { clip-path: inset(15% 0 65% 0); } /* Promena pozicije */
  40% { clip-path: inset(80% 0 5% 0); } /* Promena pozicije */
  60% { clip-path: inset(25% 0 60% 0); } /* Promena pozicije */
  80% { clip-path: inset(70% 0 20% 0); } /* Promena pozicije */
  100% { clip-path: inset(50% 0 30% 0); } /* Kraj pozicije */
`;

// Animacija treptanja
const blink = keyframes`
  0%, 100% { opacity: 1; } /* Potpuna vidljivost */
  50% { opacity: 0; } /* Potpuna nevidljivost */
`;

// Animacija skeniranja
const scanAnimation = keyframes`
  0% {
    transform: translateY(-100%); /* Početna pozicija */
    opacity: 0; /* Nevidljivo */
  }
  50% {
    opacity: 1; /* Potpuna vidljivost */
  }
  100% {
    transform: translateY(100%); /* Kraj pozicije */
    opacity: 0; /* Nevidljivo */
  }
`;

// Animacija za tekst sa glitch efektom
const glitchText = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
                -0.05em -0.025em 0 rgba(0,255,0,.75),
                -0.025em 0.05em 0 rgba(0,0,255,.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
                -0.05em -0.025em 0 rgba(0,255,0,.75),
                -0.025em 0.05em 0 rgba(0,0,255,.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
                0.025em 0.025em 0 rgba(0,255,0,.75),
                -0.05em -0.05em 0 rgba(0,0,255,.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
                0.025em 0.025em 0 rgba(0,255,0,.75),
                -0.05em -0.05em 0 rgba(0,0,255,.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
                0.05em 0 0 rgba(0,255,0,.75),
                0 -0.05em 0 rgba(0,0,255,.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
                0.05em 0 0 rgba(0,255,0,.75),
                0 -0.05em 0 rgba(0,0,255,.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255,0,0,.75),
                -0.025em -0.025em 0 rgba(0,255,0,.75),
                -0.025em -0.05em 0 rgba(0,0,255,.75);
  }
`;

// Stil za sekciju kontakta
export const Section = styled.section`
  padding: 100px 0; /* Unutrašnji razmak */
  background: rgba(0, 0, 0, 0.9); /* Pozadina */
  position: relative; /* Relativna pozicija */
  overflow: hidden; /* Sakrivanje viška sadržaja */

  &::before {
    content: '01010101'; /* Pseudo-element */
    position: absolute; /* Apsolutna pozicija */
    top: -100%; /* Pozicija iznad */
    left: 0; /* Leva pozicija */
    width: 100%; /* Širina 100% */
    height: 100%; /* Visina 100% */
    font-family: 'Matrix Code NFI', monospace; /* Font stil */
    font-size: 1.2rem; /* Veličina fonta */
    line-height: 1; /* Visina linije */
    color: ${({ theme }) => theme.colors.primary}20; /* Boja */
    animation: ${matrixRain} 20s linear infinite; /* Animacija kiše */
    pointer-events: none; /* Onemogućava interakciju */
  }
`;

// Stil za naslov
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; /* Boja naslova */
  font-size: 2.5rem; /* Veličina fonta */
  text-align: center; /* Centriranje teksta */
  margin-bottom: 3rem; /* Razmak ispod naslova */
  text-transform: uppercase; /* Velika slova */
  letter-spacing: 3px; /* Razmak između slova */
  position: relative; /* Relativna pozicija */
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; /* Efekat sjaja */

  &::before {
    content: '> '; /* Pseudo-element pre naslova */
    opacity: 0.7; /* Prozirnost */
  }

  &::after {
    content: '_'; /* Pseudo-element posle naslova */
    animation: ${blink} 1s step-end infinite; /* Animacija treptanja */
  }
`;

// Stil za formu
export const Form = styled.form`
  max-width: 600px; /* Maksimalna širina */
  margin: 0 auto; /* Centriranje */
  padding: 2rem; /* Unutrašnji razmak */
  background: rgba(0, 20, 0, 0.8); /* Pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}; /* Okvir */
  border-radius: 8px; /* Zaobljeni uglovi */
  position: relative; /* Relativna pozicija */
  z-index: 1; /* Z-index */
  backdrop-filter: blur(10px); /* Efekat zamućenja pozadine */

  &::before {
    content: ''; /* Pseudo-element */
    position: absolute; /* Apsolutna pozicija */
    top: 0; /* Gornja pozicija */
    left: 0; /* Leva pozicija */
    width: 100%; /* Širina 100% */
    height: 100%; /* Visina 100% */
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0, 255, 65, 0.05) 50%,
      transparent 100%
    ); /* Pozadina sa gradijentom */
    pointer-events: none; /* Onemogućava interakciju */
  }
`;

// Stil za wrapper inputa
export const InputWrapper = styled.div`
  position: relative; /* Relativna pozicija */
  margin-bottom: 1.5rem; /* Razmak ispod */

  &::before {
    content: '>'; /* Pseudo-element pre inputa */
    position: absolute; /* Apsolutna pozicija */
    left: -15px; /* Leva pozicija */
    top: 50%; /* Sredina vertikalno */
    transform: translateY(-50%); /* Centriranje */
    color: ${({ theme }) => theme.colors.primary}; /* Boja */
    opacity: 0.5; /* Prozirnost */
  }
`;

// Stil za input
export const Input = styled.input`
  width: 100%; /* Širina 100% */
  padding: 1rem; /* Unutrašnji razmak */
  background: rgba(0, 0, 0, 0.5); /* Pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}40; /* Okvir */
  color: ${({ theme }) => theme.colors.text}; /* Boja teksta */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  outline: none; /* Bez okvira */
  transition: all 0.3s ease; /* Animacija */

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary}; /* Boja okvira pri fokusu */
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}40; /* Senka pri fokusu */
    animation: ${glitch} 0.2s linear; /* Animacija treptanja */
  }
`;

// Stil za textarea
export const TextArea = styled.textarea`
  width: 100%; /* Širina 100% */
  padding: 1rem; /* Unutrašnji razmak */
  background: rgba(0, 0, 0, 0.5); /* Pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}40; /* Okvir */
  color: ${({ theme }) => theme.colors.text}; /* Boja teksta */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  height: 200px; /* Visina */
  outline: none; /* Bez okvira */
  transition: all 0.3s ease; /* Animacija */
  resize: none; /* Onemogućava promenu veličine */
  margin-bottom: 1rem; /* Razmak ispod */

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary}; /* Boja okvira pri fokusu */
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}40; /* Senka pri fokusu */
    animation: ${glitch} 0.2s linear; /* Animacija treptanja */
  }
`;

// Stil za kontakt informacije
export const ContactInfo = styled.div`
  margin-top: 3rem; /* Razmak iznad */
  padding: 2rem; /* Unutrašnji razmak */
  background: rgba(0, 20, 0, 0.8); /* Pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}; /* Okvir */
  border-radius: 8px; /* Zaobljeni uglovi */
  backdrop-filter: blur(10px); /* Efekat zamućenja pozadine */
  max-width: 600px; /* Maksimalna širina */
  margin-left: auto; /* Automatsko levo poravnanje */
  margin-right: auto; /* Automatsko desno poravnanje */
`;

// Stil za informacije
export const InfoItem = styled.div`
  display: flex; /* Flex layout */
  align-items: center; /* Vertikalno centriranje */
  gap: 1rem; /* Razmak između elemenata */
  padding: 1rem; /* Unutrašnji razmak */
  color: ${({ theme }) => theme.colors.primary}; /* Boja */
  border: 1px solid transparent; /* Transparentan okvir */
  transition: all 0.3s ease; /* Animacija */

  svg {
    font-size: 1.5rem; /* Veličina ikone */
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.primary}); /* Senka */
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}; /* Boja okvira pri pregledu */
    background: rgba(0, 255, 65, 0.05); /* Pozadina pri pregledu */
    transform: translateX(10px); /* Pomak pri pregledu */
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2); /* Senka pri pregledu */
  }
`;

// Stil za dugme
export const MatrixButton = styled.button`
  width: 100%; /* Širina 100% */
  padding: 1rem 2rem; /* Unutrašnji razmak */
  background: rgba(0, 20, 0, 0.8); /* Pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}; /* Okvir */
  color: ${({ theme }) => theme.colors.primary}; /* Boja teksta */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  font-size: 1.2rem; /* Veličina fonta */
  cursor: pointer; /* Kursor kao ruka */
  position: relative; /* Relativna pozicija */
  overflow: hidden; /* Sakrivanje viška sadržaja */
  transition: all 0.3s ease; /* Animacija */
  text-transform: uppercase; /* Velika slova */
  letter-spacing: 2px; /* Razmak između slova */

  .glitch-text {
    position: relative; /* Relativna pozicija */
    z-index: 2; /* Z-index */
    mix-blend-mode: screen; /* Efekat mešanja */
  }

  .scan-line {
    position: absolute; /* Apsolutna pozicija */
    top: 0; /* Gornja pozicija */
    left: 0; /* Leva pozicija */
    width: 100%; /* Širina 100% */
    height: 100%; /* Visina 100% */
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 255, 65, 0.2),
      transparent
    ); /* Pozadina sa gradijentom */
    animation: ${scanAnimation} 2s linear infinite; /* Animacija skeniranja */
    pointer-events: none; /* Onemogućava interakciju */
  }

  &:hover {
    background: rgba(0, 255, 65, 0.1); /* Pozadina pri pregledu */
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.4); /* Senka pri pregledu */
    transform: translateY(-2px); /* Pomak pri pregledu */

    .glitch-text {
      animation: ${glitchText} 0.8s infinite; /* Animacija treptanja */
    }
  }

  &:active {
    transform: translateY(1px); /* Pomak pri aktivaciji */
  }

  &::before {
    content: ''; /* Pseudo-element */
    position: absolute; /* Apsolutna pozicija */
    top: -2px; /* Gornja pozicija */
    left: -2px; /* Leva pozicija */
    right: -2px; /* Desna pozicija */
    bottom: -2px; /* Donja pozicija */
    background: linear-gradient(45deg,
      ${({ theme }) => theme.colors.primary},
      transparent,
      ${({ theme }) => theme.colors.primary}
    ); /* Pozadina sa gradijentom */
    z-index: -1; /* Z-index */
    animation: ${scanAnimation} 4s linear infinite; /* Animacija skeniranja */
    opacity: 0; /* Nevidljivo */
    transition: opacity 0.3s ease; /* Animacija prozirnosti */
  }

  &:hover::before {
    opacity: 1; /* Potpuna vidljivost pri pregledu */
  }
`;
