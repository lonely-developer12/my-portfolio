import styled, { keyframes } from 'styled-components'; // Uvozimo styled-components biblioteku za stilizovanje

// Definišemo animaciju za fade-in efekat
const fadeIn = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateY(20px); // Pomjeranje prema dolje
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
  }
`;

// Definišemo animaciju za pulsiranje sjaja
const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
  50% { box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0; }
  100% { box-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
`;

// Stilizovana komponenta za kontejner vremenske linije
export const TimelineContainer = styled.div`
  position: relative; // Postavljamo relativnu poziciju
  padding: 40px 0; // Dodajemo padding
  overflow: hidden; // Sakrijemo sadržaj koji izlazi iz okvira

  &::before {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    left: 50%; // Centriramo lijevo
    width: 2px; // Širina linije
    height: 100%; // Visina linije
    background: #0f0; // Zeleni pozadinski boja
    box-shadow: 0 0 15px #0f0; // Sjaj oko linije
    animation: ${glowPulse} 2s infinite; // Animacija pulsiranja
  }
`;

// Stilizovana komponenta za stavku vremenske linije
export const TimelineItem = styled.div`
  display: flex; // Koristimo flexbox
  justify-content: ${props => props.$position === 'left' ? 'flex-start' : 'flex-end'}; // Određujemo poravnanje na osnovu pozicije
  padding: 20px; // Dodajemo padding
  width: 50%; // Širina stavke
  margin-left: ${props => props.$position === 'left' ? '0' : '50%'}; // Margin na osnovu pozicije
  position: relative; // Relativna pozicija
  opacity: 0; // Početna neprozirnost
  animation: ${fadeIn} 0.5s ease forwards; // Animacija fade-in
  animation-delay: ${props => props.$delay}s; // Kašnjenje animacije

  &::before {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    width: 20px; // Širina kruga
    height: 20px; // Visina kruga
    background: #0f0; // Zeleni pozadinski boja
    border-radius: 50%; // Zaobljeni oblik
    ${props => props.$position === 'left' ? 'right: -10px;' : 'left: -10px;'} // Pozicija kruga
    top: 50%; // Vertikalno centriranje
    transform: translateY(-50%); // Pomjeranje za centar
    box-shadow: 0 0 15px #0f0; // Sjaj oko kruga
    animation: ${glowPulse} 2s infinite; // Animacija pulsiranja
  }
`;

// Stilizovana komponenta za sadržaj vremenske linije
export const TimelineContent = styled.div`
  background: rgba(0, 255, 0, 0.1); // Pozadina sa prozirnošću
  padding: 20px; // Dodajemo padding
  border: 1px solid #0f0; // Zeleni okvir
  border-radius: 5px; // Zaobljeni rubovi
  max-width: 80%; // Maksimalna širina
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.2); // Sjaj oko sadržaja
  transition: all 0.3s ease; // Glatka tranzicija

  .icon {
    font-size: 2rem; // Veličina ikone
    color: #0f0; // Zeleni boja
    margin-bottom: 10px; // Margin ispod ikone
  }

  h3 {
    color: #0f0; // Zeleni boja
    margin-bottom: 10px; // Margin ispod naslova
    font-family: 'Courier New', monospace; // Font porodica
  }

  .date {
    color: #0f0; // Zeleni boja
    opacity: 0.8; // Neprozirnost
    font-size: 0.9rem; // Veličina fonta
    margin-bottom: 10px; // Margin ispod datuma
  }

  .description {
    color: #0f0; // Zeleni boja
    opacity: 0.8; // Neprozirnost
  }

  &:hover {
    background: rgba(0, 255, 0, 0.2); // Pozadina pri hoveru
    transform: scale(1.02) translateY(-5px); // Efekat povećanja
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3); // Sjaj pri hoveru
  }
`;
