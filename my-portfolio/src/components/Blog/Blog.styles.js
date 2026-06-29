import styled, { keyframes } from 'styled-components';

// Animacija sjaja za Matrix efekat
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
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Stil za naslov sa tipkanjem
export const TypewriterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; /* Boja naslova */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  font-size: 2.5rem; /* Veličina fonta */
  margin-bottom: 3rem; /* Razmak ispod naslova */
  text-align: center; /* Centriranje teksta */
  position: relative; /* Relativna pozicija */
  padding: 2rem 0; /* Unutrašnji razmak */
  letter-spacing: 2px; /* Razmak između slova */
  animation: ${matrixGlow} 2s ease-in-out infinite; /* Animacija sjaja */

  .cursor {
    animation: ${blink} 1s step-end infinite; /* Animacija treptanja kursora */
    font-weight: 100; /* Debljina fonta */
    margin-left: 2px; /* Razmak levo od kursora */
  }

  &::before,
  &::after {
    content: ''; /* Pseudo-element */
    position: absolute; /* Apsolutna pozicija */
    left: 50%; /* Centriranje */
    transform: translateX(-50%); /* Pomak za centriranje */
    width: 200px; /* Širina linije */
    height: 2px; /* Visina linije */
    background: ${({ theme }) => theme.colors.primary}; /* Boja linije */
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
                0 0 20px ${({ theme }) => theme.colors.primary}; /* Senka linije */
  }

  &::before {
    top: 0; /* Pozicija gornje linije */
  }

  &::after {
    bottom: 0; /* Pozicija donje linije */
  }

  @media (min-width: 768px) {
    &::before,
    &::after {
      width: 300px; /* Širina linija na većim ekranima */
    }
  }
`;

// Stil za kontejner bloga
export const BlogContainer = styled.div`
  padding: 4rem 2rem; /* Unutrašnji razmak */
  background: ${({ theme }) => theme.colors.background}; /* Pozadina */
  position: relative; /* Relativna pozicija */
  overflow: hidden; /* Sakrivanje viška sadržaja */
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertikalno poravnanje */
  align-items: center; /* Centriranje elemenata */
`;

// Stil za grid bloga
export const BlogGrid = styled.div`
  display: grid; /* Grid layout */
  grid-template-columns: 1fr; /* Jedna kolona */
  gap: 2rem; /* Razmak između kartica */
  max-width: 1200px; /* Maksimalna širina */
  width: 100%; /* Širina 100% */
  margin: 0 auto; /* Centriranje */
  padding: 0 1rem; /* Unutrašnji razmak */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Dve kolone na većim ekranima */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Tri kolone na još većim ekranima */
  }
`;

// Stil za karticu blog posta
export const Card = styled.div`
  background: rgba(0, 0, 0, 0.7); /* Poluprozirna pozadina */
  border: 1px solid ${({ theme }) => theme.colors.primary}40; /* Zeleni okvir */
  padding: 2rem; /* Unutrašnji razmak */
  border-radius: 4px; /* Zaobljeni uglovi */
  transition: all 0.3s ease; /* Animacija pri pregledu */

  &:hover {
    transform: translateY(-5px); /* Pomak pri pregledu */
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40; /* Senka pri pregledu */
  }
`;

// Stil za naslov kartice
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; /* Boja naslova */
  font-family: ${({ theme }) => theme.fonts.cyber}; /* Font stil */
  font-size: 1.5rem; /* Veličina fonta */
  margin-bottom: 1rem; /* Razmak ispod naslova */
`;

// Stil za kratak opis kartice
export const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.text}; /* Boja opisa */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  font-size: 0.9rem; /* Veličina fonta */
  line-height: 1.6; /* Visina linije */
  margin-bottom: 1.5rem; /* Razmak ispod opisa */
`;

// Stil za meta informacije
export const Meta = styled.div`
  display: flex; /* Flex layout */
  justify-content: space-between; /* Razmak između elemenata */
  color: ${({ theme }) => theme.colors.primary}80; /* Boja meta informacija */
  font-family: ${({ theme }) => theme.fonts.mono}; /* Font stil */
  font-size: 0.8rem; /* Veličina fonta */
`;
