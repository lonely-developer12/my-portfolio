import styled, { keyframes } from 'styled-components';

// Animacija koja stvara efekat kiše
const matrixRain = keyframes`
  0% { transform: translateY(-100%); } // Početna pozicija
  100% { transform: translateY(100%); } // Krajnja pozicija
`;

// Animacija koja stvara "glitch" efekat
const glitch = keyframes`
  0% { clip-path: inset(50% 0 30% 0); }
  20% { clip-path: inset(15% 0 65% 0); }
  40% { clip-path: inset(80% 0 5% 0); }
  60% { clip-path: inset(25% 0 60% 0); }
  80% { clip-path: inset(70% 0 20% 0); }
  100% { clip-path: inset(50% 0 30% 0); }
`;

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
  0%, 100% { opacity: 1; } // Potpuna vidljivost
  50% { opacity: 0; } // Nevidljivost
`;

// Sekcija za pretplatu
export const SubscribeSection = styled.section`
  padding: 80px 20px; // Unutrašnji razmak
  background: rgba(0, 0, 0, 0.9); // Pozadina sa prozirnošću
  position: relative; // Relativna pozicija za apsolutne elemente
  overflow: hidden; // Sakrivanje sadržaja koji izlazi izvan granica

  &::before {
    content: '01010101'; // Prikazivanje binarnog koda
    position: absolute; // Apsolutna pozicija
    top: -100%; // Početna pozicija iznad sekcije
    left: 0; // Poravnanje levo
    width: 100%; // Širina sekcije
    height: 100%; // Visina sekcije
    font-family: 'Matrix Code NFI', monospace; // Font za prikazivanje
    font-size: 1.2rem; // Veličina fonta
    line-height: 1; // Visina linije
    color: ${({ theme }) => theme.colors.primary}20; // Boja sa prozirnošću
    animation: ${matrixRain} 20s linear infinite; // Animacija kiše
    pointer-events: none; // Onemogućavanje interakcije
  }
`;

// Naslov sekcije pretplate
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-size: 2.5rem; // Veličina fonta
  text-align: center; // Centrirano poravnanje
  margin-bottom: 3rem; // Donji razmak
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
  text-transform: uppercase; // Velika slova
  letter-spacing: 3px; // Razmak između slova
  position: relative; // Relativna pozicija
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; // Senka teksta

  .prefix {
    opacity: 0.7; // Prozirnost za prefiks
  }

  .blink {
    animation: ${blink} 1s step-end infinite; // Animacija treptanja
  }
`;

// Naslov sa efektom kucanja
export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
  font-size: 2.5rem; // Veličina fonta
  margin-bottom: 3rem; // Donji razmak
  text-align: center; // Centrirano poravnanje
  position: relative; // Relativna pozicija
  padding: 2rem 0; // Unutrašnji razmak
  letter-spacing: 2px; // Razmak između slova
  animation: ${matrixGlow} 2s ease-in-out infinite; // Animacija sjaja

  .cursor {
    animation: ${blink} 1s step-end infinite; // Animacija treptanja za kursor
    font-weight: 100; // Težina fonta
    margin-left: 2px; // Razmak levo
  }

  &::before,
  &::after {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    left: 50%; // Poravnanje na sredinu
    transform: translateX(-50%); // Centriranje
    width: 200px; // Širina linije
    height: 2px; // Visina linije
    background: ${({ theme }) => theme.colors.primary}; // Boja linije
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}, // Senka
                0 0 20px ${({ theme }) => theme.colors.primary}; // Dodatna senka
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
      width: 300px; // Širina linije za veće ekrane
    }
  }
`;

// Forma za unos podataka
export const Form = styled.form`
  max-width: 500px; // Maksimalna širina forme
  margin: 0 auto; // Centrirano poravnanje
  padding: 2rem; // Unutrašnji razmak
  background: rgba(0, 20, 0, 0.8); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}; // Granica
  border-radius: 8px; // Zaobljeni uglovi
  position: relative; // Relativna pozicija
  backdrop-filter: blur(10px); // Blur efekat pozadine

  &::before {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    top: 0; // Gornja pozicija
    left: 0; // Leva pozicija
    width: 100%; // Širina
    height: 100%; // Visina
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0, 255, 65, 0.05) 50%, // Prozirna boja
      transparent 100% // Prozirna boja
    );
    pointer-events: none; // Onemogućavanje interakcije
  }
`;

// Wrapper za unos
export const InputWrapper = styled.div`
  position: relative; // Relativna pozicija
  margin-bottom: 1.5rem; // Donji razmak

  &::before {
    content: '>'; // Prikazivanje simbola
    position: absolute; // Apsolutna pozicija
    left: -15px; // Leva pozicija
    top: 50%; // Sredina vertikalno
    transform: translateY(-50%); // Centriranje
    color: ${({ theme }) => theme.colors.primary}; // Boja simbola
    opacity: 0.5; // Prozirnost
  }
`;

// Polje za unos
export const Input = styled.input`
  width: 100%; // Širina
  padding: 1rem; // Unutrašnji razmak
  background: rgba(0, 0, 0, 0.5); // Pozadina sa prozirnošću
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  color: ${({ theme }) => theme.colors.text}; // Boja teksta
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
  outline: none; // Uklanjanje okvira
  transition: all 0.3s ease; // Efekat prelaza

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary}; // Boja granice pri fokusu
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}40; // Senka
    animation: ${glitch} 0.2s linear; // Animacija "glitch"
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary}60; // Boja placeholdera
  }
`;

// Dugme za pretplatu
export const SubscribeButton = styled.button`
  width: 100%; // Širina
  padding: 1rem; // Unutrašnji razmak
  background: transparent; // Transparentna pozadina
  border: 1px solid ${({ theme }) => theme.colors.primary}; // Granica
  color: ${({ theme }) => theme.colors.primary}; // Boja teksta
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
  font-size: 1.1rem; // Veličina fonta
  cursor: pointer; // Kursor
  transition: all 0.3s ease; // Efekat prelaza
  position: relative; // Relativna pozicija
  overflow: hidden; // Sakrivanje sadržaja

  &::before {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    top: 0; // Gornja pozicija
    left: -100%; // Leva pozicija
    width: 100%; // Širina
    height: 100%; // Visina
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 65, 0.2), // Prozirna boja
      transparent // Prozirna boja
    );
    transition: 0.5s; // Efekat prelaza
  }

  &:hover {
    background: rgba(0, 255, 65, 0.1); // Pozadina pri hoveru
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3); // Senka

    &::before {
      left: 100%; // Pomera se na desnu stranu
    }
  }
`;

// Poruka o uspehu
export const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.primary}; // Boja teksta
  text-align: center; // Centrirano poravnanje
  margin-top: 1rem; // Gornji razmak
  padding: 1rem; // Unutrašnji razmak
  border: 1px solid ${({ theme }) => theme.colors.primary}40; // Granica
  background: rgba(0, 255, 65, 0.1); // Pozadina sa prozirnošću
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
`;

// Poruka o grešci
export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.secondary}; // Boja teksta
  text-align: center; // Centrirano poravnanje
  margin-top: 1rem; // Gornji razmak
  padding: 1rem; // Unutrašnji razmak
  border: 1px solid ${({ theme }) => theme.colors.secondary}40; // Granica
  background: rgba(255, 0, 60, 0.1); // Pozadina sa prozirnošću
  font-family: ${({ theme }) => theme.fonts.mono}; // Monospace font
`;
