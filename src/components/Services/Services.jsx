import React from 'react'; // Uvozimo React
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa'; // Uvozimo ikone za različite usluge
import {
  ServicesSection, // Sekcija za usluge
  ServicesGrid, // Mreža za usluge
  ServiceCard, // Kartica za pojedinačnu uslugu
  ServiceIcon, // Ikona usluge
  ServiceTitle, // Naslov usluge
  ServiceDescription, // Opis usluge
  Title // Glavni naslov
} from './Services.styles'; // Uvozimo stilove za usluge
import { useScrollAnimation } from '../../hooks/useScrollAnimation'; // Uvozimo custom hook za animaciju pri skrolovanju
import { motion } from 'framer-motion'; // Uvozimo motion za animacije

const Services = () => {
  const titleRef = useScrollAnimation({ animation: 'glitchIn' }); // Referenca za naslov sa animacijom
  const servicesRef = useScrollAnimation({ animation: 'fadeInUp', threshold: 0.1 }); // Referenca za usluge sa animacijom

  // Lista usluga
  const services = [
    {
      icon: <FaCode />, // Ikona za frontend razvoj
      title: "Frontend Development", // Naslov usluge
      description: "Entwicklung moderner und reaktiver Benutzeroberflächen mit React, TypeScript und Next.js" // Opis usluge
    },
    {
      icon: <FaServer />, // Ikona za backend razvoj
      title: "Backend Development", // Naslov usluge
      description: "Skalierbare Server-Architekturen mit Node.js, Express und verschiedenen Datenbanken" // Opis usluge
    },
    {
      icon: <FaMobile />, // Ikona za mobilni razvoj
      title: "Mobile Development", // Naslov usluge
      description: "Cross-Platform Mobile Apps mit React Native und nativen Technologien" // Opis usluge
    },
    {
      icon: <FaDatabase />, // Ikona za dizajn baze podataka
      title: "Database Design", // Naslov usluge
      description: "Optimierte Datenbankstrukturen mit SQL, NoSQL und Cache-Strategien" // Opis usluge
    },
    {
      icon: <FaCloud />, // Ikona za cloud usluge
      title: "Cloud Services", // Naslov usluge
      description: "Cloud-Infrastruktur und Deployment mit AWS, Docker und Kubernetes" // Opis usluge
    },
    {
      icon: <FaShieldAlt />, // Ikona za sigurnosna rešenja
      title: "Security Solutions", // Naslov usluge
      description: "Implementierung von Sicherheitsprotokollen und Verschlüsselungstechniken" // Opis usluge
    }
  ];

  return (
    <ServicesSection>
      <Title ref={titleRef}>services.exe</Title> {/* Glavni naslov */}
      <ServicesGrid ref={servicesRef}>
        {services.map((service, index) => ( // Mapiramo usluge
          <ServiceCard
            key={index} // Ključ za svaku karticu
            as={motion.div} // Koristimo motion.div za animacije
            initial={{ opacity: 0, y: 20 }} // Početno stanje
            whileInView={{ opacity: 1, y: 0 }} // Stanje kada je u vidnom polju
            transition={{ duration: 0.5, delay: index * 0.1 }} // Animacija sa kašnjenjem
          >
            <ServiceIcon>{service.icon}</ServiceIcon> {/* Ikona usluge */}
            <ServiceTitle>{service.title}</ServiceTitle> {/* Naslov usluge */}
            <ServiceDescription>{service.description}</ServiceDescription> {/* Opis usluge */}
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services; // Izvozimo komponentu Services
