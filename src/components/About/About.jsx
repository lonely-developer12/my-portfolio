import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import {
  AboutSection,
  AboutContainer,
  ImageContainer,
  ContentContainer,
  Title,
  Subtitle,
  Description,
  TechStack,
  Stats,
  StatItem,
  StatNumber,
  StatText,
  HighlightBox,
} from './About.styles';
// import img1 from './public/img/img1.png';
// Definiše stil za MatrixRain komponentu
const MatrixRain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, transparent, rgba(0, 255, 65, 0.1));
  pointer-events: none;
`;

// Glavna komponenta About
const About = () => {
  const { scrollYProgress } = useScroll(); // Praćenje pomeranja skrolovanja
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Transformacija Y pozicije na osnovu skrolovanja

  // Statistika o iskustvu
  const stats = [
    { number: '3+', text: 'Years Experience' },
    { number: '20+', text: 'Projects Completed' },
    { number: '15+', text: 'Happy Clients' },
  ];

  // Tehnološki stack
  const techStack = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'HTML5',
    'CSS3',
    'SASS',
    'Git',
    'REST APIs',
  ];

  return (
    <AboutSection id="about">
      <MatrixRain />
      <AboutContainer>
        {/* Sekcija za sliku */}
        <ImageContainer>
          <motion.div style={{ y }}>
            <motion.img
              src="/img/img0.png"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%', // Oder eine feste Größe wie '300px'
                height: 'auto',
                maxWidth: '400px',
                objectFit: 'cover', // Alternativ "contain" ausprobieren
                borderRadius: '15px',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                filter: 'brightness(0.9) contrast(1.1) hue-rotate(60deg)',
                opacity: '0.85',
                border: '2px solid rgba(0, 255, 65, 0.3)',
              }}
            />
          </motion.div>
        </ImageContainer>

        {/* Sekcija za sadržaj */}
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>About Me</Title>
            <Subtitle>Frontend Developer & UI Designer</Subtitle>

            {/* Opis sa animacijom pri pregledu */}
            <Description
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ cursor: 'pointer' }}
            >
              As a passionate Frontend Developer, I combine creative design with
              technical expertise. I specialize in building user-friendly and
              innovative web applications that not only look great but also
              provide exceptional user experiences. With a keen eye for detail and
              a commitment to clean code, I transform ideas into
              responsive, dynamic websites.
            </Description>

            <HighlightBox>
              <h3>Technical Expertise</h3>
              <TechStack>
                {techStack.map((tech, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      cursor: 'pointer',
                      padding: '8px 16px',
                      borderRadius: '5px',
                    }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </TechStack>
            </HighlightBox>

            {/* Sekcija sa statistikama */}
            <Stats>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatText>{stat.text}</StatText>
                </StatItem>
              ))}
            </Stats>
          </motion.div>
        </ContentContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
