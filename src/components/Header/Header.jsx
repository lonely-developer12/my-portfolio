import React, { useState, useEffect } from 'react'; // Uvozimo React i hookove useState i useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Uvozimo motion i AnimatePresence iz framer-motion za animacije
import {
  HeaderContainer, // Kontejner za header
  Nav, // Navigacija
  Logo, // Logo
  NavItems, // Stavke navigacije
  NavItem, // Jedna stavka navigacije
  MobileMenuButton, // Dugme za mobilni meni
  MobileMenu, // Mobilni meni
  GlitchEffect // Efekat glitch za logo
} from './Header.styles'; // Uvozimo stilove za header

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Držimo stanje da li je stranica skrolovana
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Držimo stanje da li je mobilni meni otvoren

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Postavljamo stanje skrolovanja na true ako je skrol više od 50px
    };
    window.addEventListener('scroll', handleScroll); // Dodajemo event listener za skrol
    return () => window.removeEventListener('scroll', handleScroll); // Uklanjamo event listener kada se komponenta unmounta
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' }, // Link za početnu stranicu
    { id: 'about', label: 'ABOUT' }, // Link za o nama
    { id: 'projects', label: 'PROJECTS' }, // Link za projekte
    { id: 'skills', label: 'SKILLS' }, // Link za veštine
    { id: 'contact', label: 'CONTACT' } // Link za kontakt
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId); // Pronađi sekciju po ID-u
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Glatko skroluj do sekcije
      setIsMobileMenuOpen(false); // Zatvori mobilni meni
    }
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}> {/* Prosledi stanje skrolovanja */}
      <Nav>
        <Logo
          as={motion.div}
          initial={{ opacity: 0, x: -20 }} // Početna animacija
          animate={{ opacity: 1, x: 0 }} // Animacija kada se prikaže
          transition={{ duration: 0.5 }} // Trajanje animacije
          onClick={() => scrollToSection('home')} // Skroluj do početne sekcije kada se klikne na logo
        >
          <GlitchEffect data-text="<CYBER.DEV/>"> {/* Efekat glitch na logo */}
            <span>&lt;CYBER.DEV/&gt;</span>
          </GlitchEffect>
        </Logo>

        <NavItems>
          {navLinks.map((link, index) => ( // Mapiramo kroz linkove
            <NavItem
              key={link.id}
              as={motion.button}
              initial={{ opacity: 0, y: -20 }} // Početna animacija
              animate={{ opacity: 1, y: 0 }} // Animacija kada se prikaže
              transition={{ duration: 0.5, delay: index * 0.1 }} // Trajanje animacije sa kašnjenjem
              onClick={() => scrollToSection(link.id)} // Skroluj do sekcije kada se klikne
              whileHover={{ y: -3 }} // Animacija pri hover-u
            >
              {link.label} {/* Prikazujemo labelu linka */}
            </NavItem>
          ))}
        </NavItems>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}> {/* Dugme za mobilni meni */}
          <motion.span animate={{ rotate: isMobileMenuOpen ? 45 : 0 }} /> {/* Animacija rotacije */}
          <motion.span animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} /> {/* Animacija opaciteta */}
          <motion.span animate={{ rotate: isMobileMenuOpen ? -45 : 0 }} /> {/* Animacija rotacije */}
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && ( // Ako je mobilni meni otvoren
            <MobileMenu
              as={motion.div}
              initial={{ y: '-100%' }} // Početna pozicija
              animate={{ y: 0 }} // Animacija kada se prikaže
              exit={{ y: '-100%' }} // Animacija kada se zatvori
              transition={{ type: 'tween' }} // Tip animacije
            >
              {navLinks.map((link) => ( // Mapiramo kroz linkove
                <NavItem
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} // Skroluj do sekcije kada se klikne
                >
                  {link.label} {/* Prikazujemo labelu linka */}
                </NavItem>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; // Izvozimo Header komponentu
