import styled from 'styled-components'; // Uvozimo styled-components
import { glitchAnim, matrixRain } from '../../styles/animations'; // Uvozimo animacije

// Sekcija za usluge
export const ServicesSection = styled.section`
  padding: 6rem 2rem; // Unutrašnje margine
  background: ${({ theme }) => theme.colors.background}; // Pozadina sekcije
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrij sve što izlazi izvan granica

  &::after {
    content: ''; // Pseudo-element
    position: absolute; // Apsolutna pozicija
    top: 0; left: 0; right: 0; bottom: 0; // Pokriva ceo kontejner
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.colors.primary}05); // Linearni gradijent
    animation: ${matrixRain} 20s linear infinite; // Animacija kiše
    pointer-events: none; // Onemogućava interakciju
  }
`;

// Glavni naslov sekcije
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 2.5rem; // Veličina fonta
  text-align: center; // Centriranje
  margin-bottom: 4rem; // Donja margina
  position: relative; // Relativna pozicija

  &::before {
    content: '>'; // Dodajemo znak '>' pre naslova
    margin-right: 0.5rem; // Desna margina
    opacity: 0.7; // Prozirnost
  }
`;

// Mreža za usluge
export const ServicesGrid = styled.div`
  display: grid; // Prikazivanje u mreži
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Automatsko prilagođavanje kolona
  gap: 2rem; // Razmak između elemenata
  max-width: 1200px; // Maksimalna širina
  margin: 0 auto; // Centriranje
  position: relative; // Relativna pozicija
  z-index: 1; // Z-index za slojeve
`;

// Kartica za pojedinačnu uslugu
export const ServiceCard = styled.div`
  background: rgba(0, 0, 0, 0.7); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  padding: 2rem; // Unutrašnje margine
  border-radius: 4px; // Zaobljeni uglovi
  transition: all 0.3s ease; // Animacija prelaza
  backdrop-filter: blur(10px); // Efekat zamućenja pozadine

  &:hover {
    transform: translateY(-10px); // Pomjeranje pri prelasku miša
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}30; // Efekat sjene

    svg {
      animation: ${glitchAnim} 0.3s infinite; // Animacija glitch efekta za ikone
      color: #fff; // Promjena boje ikona
    }
  }
`;

// Ikona usluge
export const ServiceIcon = styled.div`
  font-size: 3rem; // Veličina ikone
  color: ${({ theme }) => theme.colors.primary}; // Boja ikone
  margin-bottom: 1.5rem; // Donja margina
  transition: all 0.3s ease; // Animacija prelaza
`;

// Naslov usluge
export const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.cyber}; // Font
  font-size: 1.5rem; // Veličina fonta
  margin-bottom: 1rem; // Donja margina
`;

// Opis usluge
export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text}; // Boja teksta
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  font-size: 0.9rem; // Veličina fonta
  line-height: 1.6; // Visina linije
  opacity: 0.8; // Prozirnost
`;
