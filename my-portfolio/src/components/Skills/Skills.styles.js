import styled, { keyframes } from 'styled-components'; // Uvozimo styled-components i keyframes za animacije

// Animacija za neonski sjaj
const neonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary},
                0 0 10px ${({ theme }) => theme.colors.primary};
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary},
                0 0 30px ${({ theme }) => theme.colors.primary};
  }
`;

// Animacija za loading bar
const loadProgress = keyframes`
  from { width: 0; } // Početna širina
  to { width: var(--progress); } // Širina na osnovu nivoa
`;

// Animacija za skenirajuću liniju
const scanline = keyframes`
  0% {
    transform: translateY(-100%); // Pomjeranje prema gore
    opacity: 0; // Nevidljivo
  }
  50% {
    opacity: 0.7; // Poluvidljivo
  }
  100% {
    transform: translateY(100%); // Pomjeranje prema dolje
    opacity: 0; // Nevidljivo
  }
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

// Animacija treptanja
const blink = keyframes`
  0%, 100% { opacity: 1; } // Potpuno vidljivo
  50% { opacity: 0; } // Nevidljivo
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
`;

// Kontejner za veštine
export const SkillsContainer = styled.section`
  position: relative; // Relativna pozicija
  padding: 4rem 2rem; // Unutrašnje margine
  background: ${({ theme }) => theme.colors.background}; // Pozadina
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
      ${({ theme }) => theme.colors.primary}10 50%,
      transparent 100%
    ); // Linearni gradijent
    animation: ${scanline} 4s linear infinite; // Animacija skeniranja
    pointer-events: none; // Onemogućava interakciju
  }
`;

// Mreža za veštine
export const SkillsGrid = styled.div`
  display: grid; // Prikazivanje u mreži
  grid-template-columns: 1fr; // Jedna kolona
  gap: 2rem; // Razmak između elemenata
  max-width: 1200px; // Maksimalna širina
  width: 100%; // Širina 100%
  margin: 0 auto; // Centriranje
  padding: 0 1rem; // Unutrašnje margine

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // Dve kolone za veće ekrane
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // Tri kolone za još veće ekrane
  }
`;

// Kartica za pojedinačnu veštinu
export const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.7); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  padding: 1.5rem; // Unutrašnje margine
  border-radius: 4px; // Zaobljeni uglovi
  transition: all 0.3s ease; // Animacija prelaza

  &:hover {
    transform: translateY(-5px); // Pomjeranje pri prelasku miša
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40; // Efekat sjene
  }

  @media (max-width: 480px) {
    padding: 1rem; // Unutrašnje margine za manje ekrane
  }
`;

// Naslov veštine
export const SkillTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.cyber}; // Font
  margin-bottom: 1rem; // Donja margina
  text-transform: uppercase; // Velika slova
  letter-spacing: 2px; // Razmak između slova
  display: flex; // Fleksibilno prikazivanje
  align-items: center; // Centriranje
  gap: 0.5rem; // Razmak između ikone i teksta

  svg {
    font-size: 1.2em; // Veličina ikone
  }
`;

// Traka za prikaz nivoa veštine
export const SkillBar = styled.div`
  position: relative; // Relativna pozicija
  height: 25px; // Visina
  background: rgba(0, 255, 65, 0.1); // Pozadina
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  margin: 0.5rem 0; // Margine
  overflow: hidden; // Sakrij sve što izlazi izvan granica

  &::before {
    content: ''; // Pseudo-element
    position: absolute; // Apsolutna pozicija
    top: 0; left: 0; // Pokriva ceo projekat
    height: 100%; // Visina
    width: var(--progress); // Širina na osnovu nivoa
    background: ${({ theme }) => theme.colors.primary}40; // Pozadina
    animation: ${loadProgress} 1s ease-out forwards; // Animacija
  }

  &::after {
    content: attr(data-level)'%'; // Prikaz nivoa
    position: absolute; // Apsolutna pozicija
    right: 10px; // Desna pozicija
    top: 50%; // Centriranje
    transform: translateY(-50%); // Centriranje
    color: ${({ theme }) => theme.colors.primary}; // Boja
    font-family: ${({ theme }) => theme.fonts.mono}; // Font
    font-size: 0.8rem; // Veličina fonta
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}; // Efekat sjene
  }
`;

// Oznaka veštine
export const SkillTag = styled.span`
  display: inline-block; // Inline-block prikaz
  padding: 0.3rem 0.8rem; // Unutrašnje margine
  margin: 0.25rem; // Margine
  background: ${({ theme }) => theme.colors.primary}20; // Pozadina
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  color: ${({ theme }) => theme.colors.primary}; // Boja
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 0.8rem; // Veličina fonta
  border-radius: 2px; // Zaobljeni uglovi
  animation: ${neonPulse} 2s infinite; // Animacija neonskog sjaja

  &:hover {
    background: ${({ theme }) => theme.colors.primary}40; // Promjena pozadine pri prelasku miša
  }
`;
