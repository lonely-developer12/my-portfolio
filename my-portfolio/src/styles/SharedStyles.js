import styled from 'styled-components'; // Uvozimo styled-components za stilizovanje
import { matrixRain, glitchText, floatAnimation, scanline, matrixBorder } from './animations'; // Uvozimo animacije

// Stilizovana komponenta za kontejner sekcije
export const SectionContainer = styled.div`
  width: 100%; // Širina 100%
  max-width: 1200px; // Maksimalna širina
  margin: 0 auto; // Centriranje
  padding: 4rem 1rem; // Padding
  display: flex; // Flexbox
  flex-direction: column; // Vertikalno poravnanje
  align-items: center; // Centriranje elemenata
  justify-content: center; // Poravnanje na sredinu
  min-height: ${props => props.fullHeight ? '100vh' : 'auto'}; // Minimalna visina

  @media (max-width: 768px) {
    padding: 3rem 1rem; // Smanjenje paddinga za manje ekrane
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; // Dalje smanjenje paddinga
  }
`;

// Stilizovana komponenta za grid sadržaj
export const ContentGrid = styled.div`
  display: grid; // Grid layout
  gap: 2rem; // Razmak između elemenata
  width: 100%; // Širina 100%
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); // Automatsko prilagođavanje kolona
`;

// Stilizovana komponenta za karticu
export const Card = styled.div`
  background: rgba(0, 0, 0, 0.7); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Okvir sa bojom iz teme
  padding: 2rem; // Padding
  border-radius: 4px; // Zaobljeni rubovi
  transition: all 0.3s ease; // Glatka tranzicija

  @media (max-width: 768px) {
    padding: 1.5rem; // Smanjenje paddinga za manje ekrane
  }
`;

// Stilizovana komponenta za naslov sa tipografskim efektom
export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.mono}; // Font porodica
  font-size: clamp(1.5rem, 5vw, 2.5rem); // Veličina fonta
  margin-bottom: clamp(1.5rem, 4vw, 3rem); // Margin ispod naslova
  text-align: center; // Centriranje teksta
  padding: clamp(1rem, 3vw, 2rem) 0; // Padding
  letter-spacing: 2px; // Razmak između slova
`;

// Stilizovana komponenta za karticu matrice
export const MatrixCard = styled.div`
  background: rgba(0, 0, 0, 0.8); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Okvir sa bojom iz teme
  padding: 2rem; // Padding
  border-radius: 8px; // Zaobljeni rubovi
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrijemo sadržaj koji izlazi iz okvira
  transition: all 0.3s ease; // Glatka tranzicija
  backdrop-filter: blur(10px); // Blur efekat pozadine

  &::before {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    top: 0; // Gornja pozicija
    left: 0; // Lijeva pozicija
    right: 0; // Desna pozicija
    bottom: 0; // Donja pozicija
    background: linear-gradient( // Linearni gradijent
      180deg,
      transparent,
      ${({ theme }) => theme.colors.primary}05 // Prozirna boja
    );
    transform: translateY(-100%); // Pomjeranje iznad
    animation: ${scanline} 2s linear infinite; // Animacija skeniranja
  }

  &:hover {
    transform: translateY(-5px); // Pomjeranje prema gore pri hoveru
    animation: ${matrixBorder} 2s infinite; // Animacija granice

    &::after {
      content: ''; // Prazan sadržaj
      position: absolute; // Apsolutna pozicija
      top: 0; // Gornja pozicija
      left: 0; // Lijeva pozicija
      right: 0; // Desna pozicija
      bottom: 0; // Donja pozicija
      background: ${({ theme }) => theme.colors.primary}10; // Pozadina sa prozirnošću
      animation: ${matrixRain} 20s linear infinite; // Animacija kiše matrice
    }
  }
`;

// Stilizovana komponenta za tekst matrice
export const MatrixText = styled.span`
  position: relative; // Relativna pozicija
  color: ${({ theme }) => theme.colors.primary}; // Boja teksta
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Sjaj oko teksta
  transition: all 0.3s ease; // Glatka tranzicija

  &:hover {
    animation: ${glitchText} 0.3s infinite; // Animacija glitch efekta pri hoveru
    color: #fff; // Promjena boje na bijelu
  }
`;

// Stilizovana komponenta za lebdeći element
export const FloatingElement = styled.div`
  transition: all 0.3s ease; // Glatka tranzicija

  &:hover {
    animation: ${floatAnimation} 3s ease infinite; // Animacija lebdenja pri hoveru
  }
`;

// Stilizovana komponenta za animiranu karticu
export const AnimatedCard = styled.div`
  opacity: 0; // Početna neprozirnost
  transform: translateY(30px); // Pomjeranje prema dolje
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); // Glatka tranzicija
  animation: ${props => props.animation} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; // Animacija
  animation-delay: ${({ $index }) => `${$index * 0.1}s`}; // Kašnjenje animacije
  animation-play-state: paused; // Pauziranje animacije

  &.visible {
    animation-play-state: running; // Pokretanje animacije kada je vidljiva
  }
`;
