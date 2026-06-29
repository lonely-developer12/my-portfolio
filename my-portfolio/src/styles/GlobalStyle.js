import { createGlobalStyle } from 'styled-components'; // Uvozimo createGlobalStyle iz styled-components za globalne stilove

// Definišemo globalne stilove
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; // Postavljamo box-sizing na border-box za sve elemente
    margin: 0; // Uklanjamo marginu
    padding: 0; // Uklanjamo padding
  }

  html {
    font-size: 16px; // Postavljamo osnovnu veličinu fonta
    scroll-behavior: smooth; // Omogućavamo glatko skrolovanje
  }

  body {
    font-family: ${({ theme }) => theme.fonts.mono}; // Postavljamo font porodicu iz teme
    background: ${({ theme }) => theme.colors.background}; // Postavljamo pozadinsku boju iz teme
    color: ${({ theme }) => theme.colors.text}; // Postavljamo boju teksta iz teme
    line-height: 1.5; // Postavljamo visinu linije
    overflow-x: hidden; // Sakrijemo horizontalni overflow
  }

  main {
    position: relative; // Postavljamo relativnu poziciju
    overflow-x: hidden; // Sakrijemo horizontalni overflow
    width: 100%; // Postavljamo širinu na 100%
    padding: 0; // Uklanjamo padding
  }

  section {
    width: 100%; // Postavljamo širinu na 100%
    padding: 4rem 1rem; // Dodajemo padding

    &#home {
      padding: 0; // Uklanjamo padding za sekciju sa ID-jem home
    }
  }

  img {
    max-width: 100%; // Maksimalna širina slika
    height: auto; // Automatska visina
  }

  @media (max-width: 1200px) {
    html {
      font-size: 15px; // Smanjujemo veličinu fonta za ekrane manjih dimenzija
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px; // Dalje smanjujemo veličinu fonta
    }
    main {
      margin-top: 120px; // Dodajemo marginu na vrhu za main
    }
    section {
      padding: 3rem 1rem; // Smanjujemo padding za sekcije
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 2rem 1rem; // Dalje smanjujemo padding za sekcije
    }
  }
`;

export default GlobalStyle; // Izvozimo GlobalStyle
