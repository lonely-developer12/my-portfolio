import styled from 'styled-components'; // Uvozimo styled-components za stilizovanje
import { MatrixCard, MatrixText } from '../../styles/SharedStyles'; // Uvozimo stilizovane komponente iz SharedStyles

// Stilizovana sekcija za prikaz tehnologija
export const TechStackSection = styled.section`
  padding: 6rem 1rem; // Postavljamo unutrašnje margine
  background: ${({ theme }) =>
    theme.colors.background}; // Pozadina sekcije uzimajući boju iz teme
  position: relative; // Postavljamo relativnu poziciju
  overflow: hidden; // Sakrivamo sadržaj koji izlazi iz okvira
`;

// Stilizovana mreža za prikaz tehnologija
export const TechGrid = styled.div`
  display: grid; // Koristimo grid layout
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); // Automatski prilagođavamo kolone
  gap: 2rem; // Razmak između stavki
  max-width: 1200px; // Maksimalna širina mreže
  margin: 3rem auto 0; // Spoljašnje margine
  padding: 0 1rem; // Unutrašnje margine
`;

// Stilizovana stavka za tehnologiju
export const TechItem = styled(MatrixCard)`
  text-align: center; // Centriramo tekst

  .icon {
    font-size: 3rem; // Veličina ikone
    color: ${({ theme }) =>
      theme.colors.primary}; // Boja ikone uzimajući iz teme
    margin-bottom: 1rem; // Donja margina
  }

  h3 {
    ${MatrixText} // Uzimamo stilizovani tekst iz MatrixText
    font-size: 1.2rem; // Veličina fonta za naziv tehnologije
    margin-bottom: 0.5rem; // Donja margina
  }

  p {
    color: ${({ theme }) => theme.colors.text}; // Boja teksta uzimajući iz teme
    font-size: 0.9rem; // Veličina fonta za opis
    opacity: 0.8; // Prozirnost teksta
  }
`;
