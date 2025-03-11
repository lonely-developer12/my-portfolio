import React from 'react'; // Uvozimo React
import styled from 'styled-components'; // Uvozimo styled-components za stilizaciju
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'; // Uvozimo ikone
import { matrixRain, glitchAnim, scanline } from '../../styles/animations'; // Uvozimo animacije

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.95); // Pozadina footer-a
  padding: 3rem 0; // Unutrašnje margine
  position: relative; // Pozicija
  overflow: hidden; // Sakrij sve što izlazi iz okvira

  &::after {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    top: 0; // Gornja ivica
    left: 0; // Leva ivica
    right: 0; // Desna ivica
    bottom: 0; // Donja ivica
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.colors.primary}05); // Linearni gradijent
    animation: ${matrixRain} 20s linear infinite; // Animacija
    pointer-events: none; // Onemogućava interakciju
  }
`;

const FooterContent = styled.div`
  max-width: 1200px; // Maksimalna širina
  margin: 0 auto; // Centriranje
  padding: 0 2rem; // Unutrašnje margine
  display: grid; // Grid prikaz
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Kolone
  gap: 2rem; // Razmak između elemenata
  position: relative; // Pozicija
  z-index: 1; // Z-index
`;

const ContactInfo = styled.div`
  display: flex; // Flex prikaz
  flex-direction: column; // Kolona
  gap: 1rem; // Razmak između elemenata
`;

const ContactTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; // Boja naslova
  font-family: ${({ theme }) => theme.fonts.mono}; // Font
  margin-bottom: 1.5rem; // Donja margina
  position: relative; // Pozicija

  &::before {
    content: '>'; // Prikaz '>' pre naslova
    margin-right: 0.5rem; // Desna margina
    opacity: 0.7; // Prozirnost
  }

  &::after {
    content: ''; // Prazan sadržaj
    position: absolute; // Apsolutna pozicija
    bottom: -5px; // Donja ivica
    left: 0; // Leva ivica
    width: 100%; // Širina
    height: 1px; // Visina
    background: ${({ theme }) => theme.colors.primary}40; // Pozadina
    animation: ${scanline} 2s linear infinite; // Animacija
  }
`;

const ContactItem = styled.div`
  display: flex; // Flex prikaz
  align-items: center; // Vertikalno poravnanje
  gap: 1rem; // Razmak između elemenata
  color: ${({ theme }) => theme.colors.primary}; // Boja
  transition: all 0.3s ease; // Transicija
  padding: 0.5rem; // Unutrašnje margine
  border: 1px solid transparent; // Okvir

  &:hover {
    transform: translateX(10px); // Pomeri se udesno
    border: 1px solid ${({ theme }) => theme.colors.primary}40; // Okvir
    background: ${({ theme }) => theme.colors.primary}10; // Pozadina

    svg {
      animation: ${glitchAnim} 0.3s infinite; // Animacija za ikone
    }
  }

  svg {
    font-size: 1.2rem; // Veličina ikona
  }

  a, span {
    color: inherit; // Nasleđuje boju
    text-decoration: none; // Bez podvlačenja
    font-family: ${({ theme }) => theme.fonts.mono}; // Font
    font-size: 0.9rem; // Veličina fonta

    &:hover {
      text-decoration: underline; // Podvlačenje pri hover-u
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <ContactTitle>CONTACT.sys</ContactTitle>
          <ContactItem>
            <FaPhone />
            <a href="tel:+1 234 567 890">+1 234 567 890</a>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <a href="your@email.com">your@email.com</a>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>New York, USA</span>
          </ContactItem>
          <ContactItem>
            <FaDiscord />
            <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
              Join Discord Server
            </a>
          </ContactItem>
        </ContactInfo>

        <ContactInfo>
          <ContactTitle>SOCIAL.exe</ContactTitle>
          <ContactItem>
            <FaGithub />
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </ContactItem>
          <ContactItem>
            <FaLinkedin />
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </ContactItem>
        </ContactInfo>

        <ContactInfo>
          <ContactTitle>LEGAL.txt</ContactTitle>
          <ContactItem>
            <a href="/privacy">Privacy Policy</a>
          </ContactItem>
          <ContactItem>
            <a href="/terms">Terms of Service</a>
          </ContactItem>
          <ContactItem>
            <span>© 2024 Cyberpunk Portfolio</span>
          </ContactItem>
        </ContactInfo>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; // Izvozimo komponentu Footer
