import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';

// Stil za sekciju postignuća
const AchievementsSection = styled.section`
  background: black; /* Crna pozadina */
  color: #00ff41; /* Matrix zeleni tekst */
  font-family: 'Courier New', Courier, monospace; /* Font stil */
  min-height: 100vh; /* Minimalna visina sekcije */
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertikalno poravnanje */
  align-items: center; /* Centriranje elemenata */
  justify-content: center; /* Vertikalno centriranje */
  overflow: hidden; /* Sakrivanje viška sadržaja */
  position: relative; /* Relativna pozicija */

  h2 {
    font-size: 3.5rem; /* Veličina fonta za naslov */
    margin-bottom: 3rem; /* Razmak ispod naslova */
  }
`;

// Grid za postignuća
const AchievementsGrid = styled.div`
  display: flex; /* Flex layout */
  gap: 2rem; /* Razmak između kartica */
  z-index: 2; /* Z-index za složenost */
  justify-content: center; /* Centriranje kartica */
  flex-wrap: wrap; /* Prelamanje kartica */
`;

// Stil za kartice postignuća
const AchievementCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6); /* Poluprozirna pozadina */
  border: 1px solid #00ff41; /* Zeleni okvir */
  border-radius: 8px; /* Zaobljeni uglovi */
  padding: 2rem; /* Unutrašnji razmak */
  text-align: center; /* Centriranje teksta */
  color: #00ff41; /* Zeleni tekst */
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.7), 0 0 10px rgba(0, 255, 65, 0.5); /* Senka */
  transition: transform 0.3s, box-shadow 0.3s; /* Animacija pri pregledu */

  &:hover {
    transform: scale(1.1); /* Uvećanje pri pregledu */
    box-shadow: 0 0 30px rgba(0, 255, 65, 1), 0 0 15px rgba(0, 255, 65, 0.8); /* Promena senke */
  }
`;

// Stil za ikonu postignuća
const AchievementIcon = styled.div`
  font-size: 3rem; /* Veličina ikone */
  margin-bottom: 1rem; /* Razmak ispod ikone */
`;

// Stil za naslov postignuća
const AchievementTitle = styled.h3`
  margin-bottom: 0.5rem; /* Razmak ispod naslova */
  font-size: 1.5rem; /* Veličina fonta */
`;

// Stil za opis postignuća
const AchievementDescription = styled.p`
  font-size: 1rem; /* Veličina fonta */
`;

// Lista postignuća
const achievements = [
  {
    id: 1,
    title: "AWS Certified Developer", /* Naslov postignuća */
    description: "Amazon Web Services Certified Developer - Associate", /* Opis postignuća */
    icon: <FaCertificate />, /* Ikona postignuća */
    date: "2024", /* Godina postignuća */
  },
  {
    id: 2,
    title: "Best Web App Award", /* Naslov postignuća */
    description: "First place in regional web development competition", /* Opis postignuća */
    icon: <FaTrophy />, /* Ikona postignuća */
    date: "2023", /* Godina postignuća */
  },
  {
    id: 3,
    title: "Google UX Design", /* Naslov postignuća */
    description: "Professional UX Design Certificate from Google", /* Opis postignuća */
    icon: <FaMedal />, /* Ikona postignuća */
    date: "2023", /* Godina postignuća */
  },
  {
    id: 4,
    title: "Top Performer of the Year", /* Naslov postignuća */
    description: "Recognized as the top performer in a corporate setting", /* Opis postignuća */
    icon: <FaTrophy />, /* Ikona postignuća */
    date: "2022", /* Godina postignuća */
  },
  {
    id: 5,
    title: "Certified Kubernetes Administrator", /* Naslov postignuća */
    description: "Passed the Kubernetes certification exam by CNCF", /* Opis postignuća */
    icon: <FaCertificate />, /* Ikona postignuća */
    date: "2021", /* Godina postignuća */
  },
];

// Glavna komponenta za postignuća
const Achievements = () => {
  return (
    <AchievementsSection>
      <motion.h2
        initial={{ opacity: 0 }} /* Početna prozirnost */
        animate={{ opacity: 1 }} /* Animacija do pune prozirnosti */
        transition={{ duration: 2 }} /* Trajanje animacije */
      >
        <Typewriter
          words={['Professional Achievements']} /* Tekst koji se piše */
          loop={false} /* Ne ponavljaj */
          cursor
          cursorStyle="_" /* Stil kursora */
        />
      </motion.h2>
      <AchievementsGrid>
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id} /* Ključ za svaku karticu */
            whileHover={{ scale: 1.05 }} /* Uvećanje pri pregledu */
            whileTap={{ scale: 0.95 }} /* Smanjenje pri dodiru */
          >
            <AchievementIcon>{achievement.icon}</AchievementIcon> {/* Ikona postignuća */}
            <AchievementTitle>{achievement.title}</AchievementTitle> {/* Naslov postignuća */}
            <AchievementDescription>{achievement.description}</AchievementDescription> {/* Opis postignuća */}
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements; /* Izvoz komponente */
