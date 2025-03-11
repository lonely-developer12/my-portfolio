import React, { useEffect, useRef } from 'react'; // Uvozimo React i hookove useEffect i useRef

import { FaReact, FaNode, FaDatabase, FaDocker, FaAws, FaGit } from 'react-icons/fa'; // Uvozimo ikone za tehnologije

import {
  TechStackSection,
  TechGrid,
  TechItem
} from './TechStack.styles';
import { TypewriterTitle } from '../../styles/SharedStyles';

const techStack = [ // Definišemo niz tehnologija sa ikonama, nazivima i opisima

  { icon: <FaReact />, name: 'React', description: 'Frontend Development' },
  { icon: <FaNode />, name: 'Node.js', description: 'Backend Development' },
  { icon: <FaDatabase />, name: 'MongoDB', description: 'Database' },
  { icon: <FaDocker />, name: 'Docker', description: 'Containerization' },
  { icon: <FaAws />, name: 'AWS', description: 'Cloud Services' },
  { icon: <FaGit />, name: 'Git', description: 'Version Control' },
];

const TechStack = () => { // Glavna komponenta TechStack

  const cardsRef = useRef([]);

  useEffect(() => { // Postavljamo Intersection Observer za animaciju kartica kada su u vidnom polju

    cardsRef.current.forEach((card, index) => {
      const observer = new IntersectionObserver( // Kreiramo novog posmatrača

        ([entry]) => {
          if (entry.isIntersecting) {
            card.style.animation = `rotateInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${index * 0.1}s`;
          }
        },
        { threshold: 0.2 }
      );

      if (card) observer.observe(card);
      return () => observer.disconnect(); // Oslobađamo resurse kada se komponenta unmounta

    });
  }, []);

  return (
    <TechStackSection id="tech"> {/* Sekcija za prikaz tehnologija */}

      <TypewriterTitle> {/* Naslov sa tipkanjem */}

        {'>'}tech_stack.exe<span className="cursor">█</span>
      </TypewriterTitle>
      <TechGrid> {/* Mreža za prikaz tehnologija */}

        {techStack.map((tech, index) => (
          <TechItem key={index}>
            <div className="icon">{tech.icon}</div> {/* Prikazujemo ikonu */}

            <h3>{tech.name}</h3> {/* Prikazujemo naziv tehnologije */}

            <p>{tech.description}</p> {/* Prikazujemo opis tehnologije */}

          </TechItem>
        ))}
      </TechGrid>
    </TechStackSection>
  );
};

export default TechStack; // Izvozimo komponentu
