import React, { useState, useEffect } from 'react'; // Uvozimo React i hookove useState i useEffect
import { ThemeProvider } from 'styled-components'; // Uvozimo ThemeProvider iz styled-components
import GlobalStyle from './styles/GlobalStyle'; // Uvozimo globalne stilove
import Header from './components/Header/Header'; // Uvozimo Header komponentu
import Hero from './components/Hero/Hero'; // Uvozimo Hero komponentu
import About from './components/About/About'; // Uvozimo About komponentu
import Projects from './components/Projects/Projects'; // Uvozimo Projects komponentu
import Skills from './components/Skills/Skills'; // Uvozimo Skills komponentu
import ContactMatrix from './components/ContactMatrix/ContactMatrix'; // Uvozimo ContactMatrix komponentu
import Footer from './components/Footer/Footer'; // Uvozimo Footer komponentu
import Loading from './components/Loading/Loading'; // Uvozimo Loading komponentu
import Experience from './components/Experience/Experience'; // Uvozimo Experience komponentu
import Blog from './components/Blog/Blog'; // Uvozimo Blog komponentu
import Achievements from './components/Achievements/Achievements'; // Uvozimo Achievements komponentu
import Testimonials from './components/Testimonials/Testimonials'; // Uvozimo Testimonials komponentu
import TechStack from './components/TechStack/TechStack'; // Uvozimo TechStack komponentu
import Services from './components/Services/Services'; // Uvozimo Services komponentu
import Subscribe from './components/Subscribe/Subscribe'; // Uvozimo Subscribe komponentu
import MatrixRain from './components/MatrixRain/MatrixRain'; // Uvozimo MatrixRain komponentu

const theme = {
  colors: {
    primary: '#00ff41', // Primarna boja
    secondary: '#ff003c', // Sekundarna boja
    accent: '#0ff', // Akcent boja
    background: '#0a0a0a', // Pozadinska boja
    backgroundAlt: '#1a1a1a', // Alternativna pozadinska boja
    text: '#ffffff', // Boja teksta
    textSecondary: 'rgba(255, 255, 255, 0.7)', // Sekundarna boja teksta
    neonShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41', // Neon sjena
    glitch: {
      red: '#ff003c', // Glitch crvena
      blue: '#0ff', // Glitch plava
      green: '#00ff41', // Glitch zelena
    },
  },
  fonts: {
    cyber: '"Rajdhani", sans-serif', // Cyber font
    mono: '"Share Tech Mono", monospace', // Monospace font
  },
  breakpoints: {
    mobile: '768px', // Mobilni breakpoint
    tablet: '1024px', // Tablet breakpoint
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true); // Stanje učitavanja

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Nakon 2 sekunde, postavi stanje učitavanja na false
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <Loading />{' '}
        {/* Ako je stanje učitavanja true, prikaži Loading komponentu */}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Primjenjuje globalne stilove*/}
      <MatrixRain /> {/*// Prikazuje MatrixRain komponentu  */}
      <Header /> {/*// Prikazuje Header komponentu */}
      <main>
        <section id="home">
          <Hero /> {/*// Prikazuje Hero komponentu */}
        </section>
        <section id="about">
          <About /> {/*// Prikazuje About komponentu */}
        </section>
        <section id="services">
          <Services /> {/* // Prikazuje Services komponentu*/}
        </section>
        <section id="projects">
          <Projects /> {/*// Prikazuje Projects komponentu */}
        </section>
        <section id="skills">
          <Skills /> {/* // Prikazuje Skills komponentu*/}
        </section>
        <section id="experience">
          <Experience /> {/* // Prikazuje Experience komponentu*/}
        </section>
        <section id="blog">
          <Blog />
          {/* // Prikazuje Blog komponentu*/}
        </section>
        <section id="achievements">
          <Achievements /> {/*// Prikazuje Achievements komponentu */}
        </section>
        <section id="contact">
          <ContactMatrix /> {/*// Prikazuje ContactMatrix komponentu */}
        </section>
        <TechStack /> {/* Prikazuje TechStack komponentu*/}
        <Subscribe /> {/*Prikazuje Subscribe komponentu*/}
      </main>
      <section id="testimonials">
        <Testimonials /> {/*Prikazuje Testimonials komponentu*/}
      </section>
      <Footer /> {/*//Prikazuje Footer komponentu*/}
    </ThemeProvider>
  );
}

export default App; // Izvozimo App komponentu
