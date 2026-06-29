import styled, { keyframes } from 'styled-components';

// Animacija koja stvara sjaj oko teksta
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

// Animacija koja stvara efekat treptanja
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Kontejner za iskustvo sa stilovima
export const ExperienceContainer = styled.div`
  padding: 4rem 2rem; // Unutrašnji razmak
  background: ${({ theme }) => theme.colors.background}; // Pozadina
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrivanje sadržaja koji izlazi iz okvira
  display: flex; // Flexbox za raspored
  flex-direction: column; // Raspored u koloni
  align-items: center; // Centriranje elemenata
`;

// Naslov sa stilovima tipkovnice
export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja teksta
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 2.5rem; // Veličina fonta
  margin-bottom: 3rem; // Donji razmak
  text-align: center; // Centriranje teksta
  position: relative; // Relativna pozicija
  padding: 2rem 0; // Unutrašnji razmak
  letter-spacing: 2px; // Razmak između slova
  animation: ${matrixGlow} 2s ease-in-out infinite; // Animacija sjaja

  .cursor {
    animation: ${blink} 1s step-end infinite; // Animacija treptanja
    font-weight: 100; // Težina fonta
    margin-left: 2px; // Razmak levo
  }

  &::before,
  &::after {
    content: ''; // Pseudo-elementi
    position: absolute; // Apsolutna pozicija
    left: 50%; // Centriranje
    transform: translateX(-50%); // Pomak
    width: 200px; // Širina
    height: 2px; // Visina
    background: ${({ theme }) => theme.colors.primary}; // Pozadina
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
      0 0 20px ${({ theme }) => theme.colors.primary}; // Senka
  }

  &::before {
    top: 0; // Gornji deo
  }

  &::after {
    bottom: 0; // Donji deo
  }

  @media (min-width: 768px) {
    &::before,
    &::after {
      width: 300px; // Širina za veće ekrane
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem; // Veličina fonta za manje ekrane
    padding: 1.5rem 0; // Unutrašnji razmak
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Veličina fonta za vrlo male ekrane
    padding: 1rem 0; // Unutrašnji razmak
  }
`;
