import styled, { keyframes } from 'styled-components'; // Uvozimo styled-components i keyframes za animacije

// Animacija sjaja koja pulsira
const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}60; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; }
`;

// Animacija skeniranja
const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
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

// Animacija treptanja
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Animacija sjaja za matrix efekat
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

// Kontejner za projekte
export const ProjectsContainer = styled.div`
  padding: 4rem 2rem; // Unutrašnje margine
  background: ${({ theme }) => theme.colors.background}; // Pozadina
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrij sve što izlazi izvan granica
  display: flex; // Fleksibilno prikazivanje
  flex-direction: column; // Kolone
  align-items: center; // Centriranje elemenata

  &::before {
    content: ''; // Pseudo-element
    position: absolute; // Apsolutna pozicija
    top: 0; left: 0; right: 0; bottom: 0; // Pokriva ceo kontejner
    background: linear-gradient(
      0deg,
      transparent 0%,
      ${({ theme }) => theme.colors.primary}05 50%,
      transparent 100%
    ); // Linearni gradijent
    pointer-events: none; // Onemogućava interakciju
  }
`;

// Mreža za projekte
export const ProjectsGrid = styled.div`
  display: grid; // Prikazivanje u mreži
  grid-template-columns: 1fr; // Jedna kolona
  gap: 2rem; // Razmak između elemenata
  max-width: 1200px; // Maksimalna širina
  margin: 0 auto; // Centriranje
  width: 100%; // Širina 100%
  padding: 0 1rem; // Unutrašnje margine

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // Dve kolone za veće ekrane
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // Tri kolone za još veće ekrane
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr); // Četiri kolone za najveće ekrane
  }
`;

// Kartica za projekat
export const ProjectCard = styled.div`
  background: rgba(0, 0, 0, 0.7); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrij sve što izlazi izvan granica
  transition: all 0.3s ease; // Animacija prelaza

  &:hover {
    transform: translateY(-5px); // Pomjeranje pri prelasku miša
    animation: ${glowPulse} 2s infinite; // Animacija sjaja

    .project-title {
      animation: ${glitch} 0.3s infinite; // Animacija glitch efekta
    }
  }

  &::after {
    content: ''; // Pseudo-element
    position: absolute; // Apsolutna pozicija
    top: 0; left: 0; right: 0; height: 100%; // Pokriva ceo projekat
    background: linear-gradient(
      transparent,
      ${({ theme }) => theme.colors.primary}10
    ); // Linearni gradijent
    animation: ${scanline} 4s linear infinite; // Animacija skeniranja
    pointer-events: none; // Onemogućava interakciju
  }

  @media (max-width: 480px) {
    padding: 1rem; // Unutrašnje margine za manje ekrane
  }
`;

// Slika projekta
export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme, image }) =>
    image ? `url(${image})` : theme.colors.backgroundAlt};
  background-size: contain;  // GANZES BILD ANZEIGEN
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: ${({ image }) => (image ? "''" : "'[PROJECT_IMAGE]'")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.9rem;
    opacity: ${({ image }) => (image ? "0" : "0.5")};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent 0%,
      transparent 50%,
      ${({ theme }) => theme.colors.primary}10 50%,
      ${({ theme }) => theme.colors.primary}10 51%
    );
    background-size: 100% 4px;
    opacity: 0.2;
  }
`;
// Sadržaj projekta
export const ProjectContent = styled.div`
  padding: 1.5rem; // Unutrašnje margine
`;

// Naslov projekta
export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.cyber}; // Font
  font-size: 1.2rem; // Veličina fonta
  margin-bottom: 1rem; // Donja margina

  @media (max-width: 480px) {
    font-size: 1.1rem; // Veličina fonta za manje ekrane
  }
`;

// Opis projekta
export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text}; // Boja teksta
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 0.9rem; // Veličina fonta
  line-height: 1.6; // Visina linije
  margin-bottom: 1.5rem; // Donja margina

  @media (max-width: 480px) {
    font-size: 0.8rem; // Veličina fonta za manje ekrane
  }
`;

// Tehnološki skup
export const TechStack = styled.div`
  display: flex; // Fleksibilno prikazivanje
  flex-wrap: wrap; // Omogućava prelamanje
  gap: 0.5rem; // Razmak između oznaka
  margin-bottom: 1.5rem; // Donja margina
`;

// Oznaka tehnologije
export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20; // Pozadina
  color: ${({ theme }) => theme.colors.primary}; // Boja
  padding: 0.3rem 0.8rem; // Unutrašnje margine
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 0.8rem; // Veličina fonta
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica

  &:hover {
    background: ${({ theme }) => theme.colors.primary}40; // Promjena pozadine pri prelasku miša
    animation: ${glitch} 0.3s infinite; // Animacija glitch efekta
  }
`;

// Linkovi za projekte
export const ProjectLinks = styled.div`
  display: flex; // Fleksibilno prikazivanje
  gap: 1rem; // Razmak između linkova

  a {
    color: ${({ theme }) => theme.colors.primary}; // Boja linka
    text-decoration: none; // Uklanjanje podvlačenja
    font-family: ${({ theme }) => theme.fonts.mono}; // Font
    font-size: 0.9rem; // Veličina fonta
    display: flex; // Fleksibilno prikazivanje
    align-items: center; // Centriranje
    gap: 0.5rem; // Razmak između ikone i teksta

    &:hover {
      animation: ${glitch} 0.3s infinite; // Animacija glitch efekta pri prelasku miša
      text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; // Efekat sjene
    }
  }
`;

// Naslov sa efektom kucanja
export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 2.5rem; // Veličina fonta
  margin-bottom: 3rem; // Donja margina
  text-align: center; // Centriranje
  position: relative; // Relativna pozicija
  padding: 2rem 0; // Unutrašnje margine
  letter-spacing: 2px; // Razmak između slova
  animation: ${matrixGlow} 2s ease-in-out infinite; // Animacija sjaja

  .cursor {
    animation: ${blink} 1s step-end infinite; // Animacija treptanja
    font-weight: 100; // Težina fonta
    margin-left: 2px; // Lijeva margina
  }

  &::before,
  &::after {
    content: ''; // Pseudo-element
    position: absolute; // Apsolutna pozicija
    left: 50%; // Centriranje
    transform: translateX(-50%); // Centriranje
    width: 200px; // Širina
    height: 2px; // Visina
    background: ${({ theme }) => theme.colors.primary}; // Pozadina
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
                0 0 20px ${({ theme }) => theme.colors.primary}; // Efekat sjene
  }

  &::before {
    top: 0; // Gornja pozicija
  }

  &::after {
    bottom: 0; // Donja pozicija
  }

  @media (min-width: 768px) {
    &::before,
    &::after {
      width: 300px; // Širina za veće ekrane
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem; // Veličina fonta za manje ekrane
    padding: 1.5rem 0; // Unutrašnje margine
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Veličina fonta za najmanje ekrane
    padding: 1rem 0; // Unutrašnje margine
  }
`;
