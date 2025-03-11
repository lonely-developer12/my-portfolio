import styled from 'styled-components'; // Uvozimo styled-components za stilizaciju

export const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.95); // Pozadina footer-a
  backdrop-filter: blur(10px); // Blur efekat pozadine
  border-top: 1px solid ${({ theme }) => theme.colors.primary}20; // Gornji okvir
  padding: 4rem 2rem 2rem; // Unutrašnje margine
  margin-top: 4rem; // Gornja margina
`;

export const FooterContent = styled.div`
  max-width: 1200px; // Maksimalna širina
  margin: 0 auto; // Centriranje
  display: grid; // Grid prikaz
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Kolone
  gap: 3rem; // Razmak između elemenata
  padding: 0 1rem; // Unutrašnje margine
`;

export const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary}; // Boja naslova
    font-size: 1.2rem; // Veličina fonta
    margin-bottom: 1.5rem; // Donja margina
    padding-bottom: 0.5rem; // Donja unutrašnja margina
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}40; // Donji okvir
  }
`;

export const FooterNav = styled.div`
  display: flex; // Flex prikaz
  flex-direction: column; // Kolona
  gap: 0.8rem; // Razmak između elemenata
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text}; // Boja linka
  text-decoration: none; // Bez podvlačenja
  transition: all 0.3s ease; // Transicija
  padding: 0.3rem 0; // Unutrašnje margine

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; // Boja pri hover-u
    padding-left: 0.5rem; // Pomeri se levo pri hover-u
  }
`;

export const SocialLinks = styled.div`
  display: flex; // Flex prikaz
  gap: 1.5rem; // Razmak između elemenata
  margin-top: 1rem; // Gornja margina
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.primary}; // Boja ikone
  font-size: 1.5rem; // Veličina ikone
  transition: all 0.3s ease; // Transicija
  padding: 0.5rem; // Unutrašnje margine
  border: 1px solid transparent; // Okvir

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}40; // Okvir pri hover-u
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}30; // Senka pri hover-u
    transform: translateY(-2px); // Pomeri se nagore pri hover-u
  }
`;

export const Copyright = styled.div`
  text-align: center; // Centriranje teksta
  margin-top: 3rem; // Gornja margina
  padding-top: 2rem; // Gornja unutrašnja margina
  border-top: 1px solid ${({ theme }) => theme.colors.primary}20; // Gornji okvir
  color: ${({ theme }) => theme.colors.text}80; // Boja teksta
  font-size: 0.9rem; // Veličina fonta
`;
