import React, { useState, useEffect } from 'react'; // Uvozimo React i potrebne hook-ove
import Timeline from '../Timeline/Timeline'; // Uvozimo komponentu Timeline
import { ExperienceContainer, TypewriterTitle } from './Experience.styles'; // Uvozimo stilizovane komponente

const Experience = () => {
  const [title, setTitle] = useState(''); // Definišemo stanje za naslov
  const fullTitle = '> experience.exe'; // Puni naslov koji će se prikazivati

  useEffect(() => {
    let index = 0; // Inicijalizujemo indeks za animaciju
    const timer = setInterval(() => {
      setTitle(fullTitle.slice(0, index)); // Postavljamo naslov do trenutnog indeksa
      index++;
      if (index > fullTitle.length) {
        clearInterval(timer); // Zaustavljamo tajmer kada je animacija završena
      }
    }, 100); // Postavljamo interval za animaciju

    return () => clearInterval(timer); // Čistimo tajmer kada se komponenta unmount-uje
  }, []);

  return (
    <ExperienceContainer>
      <TypewriterTitle>
        {title}<span className="cursor">█</span> {/* Prikazujemo naslov sa kursorom */}
      </TypewriterTitle>
      <Timeline /> {/* Uključujemo komponentu Timeline */}
    </ExperienceContainer>
  );
};

export default Experience; // Izvozimo komponentu Experience
