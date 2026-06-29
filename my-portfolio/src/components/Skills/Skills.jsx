import React, { useState, useEffect } from 'react'; // Uvozimo React i hookove useState i useEffect
import { motion } from 'framer-motion'; // Uvozimo motion za animacije
import { FaReact, FaJs, FaHtml5, FaCss3, FaNode, FaDatabase, FaDocker, FaAws } from 'react-icons/fa'; // Uvozimo ikone za različite tehnologije
import {
  SkillsContainer, // Kontejner za veštine
  SkillsGrid, // Mreža za veštine
  SkillCard, // Kartica za pojedinačnu veštinu
  SkillTitle, // Naslov veštine
  SkillBar, // Traka za prikaz nivoa veštine
  SkillTag, // Oznaka veštine
  TypewriterTitle // Naslov sa efektom kucanja
} from './Skills.styles'; // Uvozimo stilove za veštine

const Skills = () => {
  const [title, setTitle] = useState(''); // Stanje za naslov
  const fullTitle = '> skills.exe'; // Puni naslov koji će se prikazati

  useEffect(() => {
    let index = 0; // Indeks za kucanje
    const timer = setInterval(() => {
      setTitle(fullTitle.slice(0, index)); // Postavljamo naslov do trenutnog indeksa
      index++;
      if (index > fullTitle.length) {
        clearInterval(timer); // Zaustavljamo tajmer kada je naslov potpuno prikazan
      }
    }, 100); // Interval od 100 ms

    return () => clearInterval(timer); // Čistimo tajmer prilikom demontaže komponente
  }, []);

  // Podaci o veštinama
  const skillsData = [
    {
      category: 'Frontend Development', // Kategorija veštine
      icon: <FaReact />, // Ikona za frontend razvoj
      skills: [
        { name: 'React.js', level: 95, icon: <FaReact /> }, // Veština sa nivoom
        { name: 'JavaScript', level: 90, icon: <FaJs /> }, // Veština sa nivoom
        { name: 'HTML5/CSS3', level: 95, icon: <><FaHtml5 /> <FaCss3 /></> } // Veština sa nivoom
      ],
      tags: ['Redux', 'TypeScript', 'Next.js', 'Styled Components', 'Material UI'] // Oznake za dodatne tehnologije
    },
    {
      category: 'Backend Development', // Kategorija veštine
      icon: <FaNode />, // Ikona za backend razvoj
      skills: [
        { name: 'Node.js', level: 85 }, // Veština sa nivoom
        { name: 'Express.js', level: 80 }, // Veština sa nivoom
        { name: 'RESTful APIs', level: 90 } // Veština sa nivoom
      ],
      tags: ['GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Socket.io'] // Oznake za dodatne tehnologije
    },
    {
      category: 'DevOps & Tools', // Kategorija veštine
      icon: <FaDocker />, // Ikona za DevOps
      skills: [
        { name: 'Docker', level: 75 }, // Veština sa nivoom
        { name: 'Git', level: 90 }, // Veština sa nivoom
        { name: 'AWS', level: 70 } // Veština sa nivoom
      ],
      tags: ['CI/CD', 'Jenkins', 'Kubernetes', 'Linux', 'Nginx'] // Oznake za dodatne tehnologije
    },
    {
      category: 'Mobile Development', // Kategorija veštine
      icon: <FaReact />, // Ikona za mobilni razvoj
      skills: [
        { name: 'React Native', level: 85 }, // Veština sa nivoom
        { name: 'iOS/Android', level: 75 }, // Veština sa nivoom
        { name: 'Mobile UI/UX', level: 80 } // Veština sa nivoom
      ],
      tags: ['Expo', 'Native APIs', 'App Store', 'Play Store'] // Oznake za dodatne tehnologije
    },
    {
      category: 'Database Management', // Kategorija veštine
      icon: <FaDatabase />, // Ikona za upravljanje bazama podataka
      skills: [
        { name: 'SQL', level: 85 }, // Veština sa nivoom
        { name: 'NoSQL', level: 80 }, // Veština sa nivoom
        { name: 'Database Design', level: 85 } // Veština sa nivoom
      ],
      tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] // Oznake za dodatne tehnologije
    },
    {
      category: 'Cloud Services', // Kategorija veštine
      icon: <FaAws />, // Ikona za cloud usluge
      skills: [
        { name: 'AWS', level: 75 }, // Veština sa nivoom
        { name: 'Cloud Architecture', level: 70 }, // Veština sa nivoom
        { name: 'Serverless', level: 80 } // Veština sa nivoom
      ],
      tags: ['Lambda', 'S3', 'EC2', 'CloudFront', 'Route53'] // Oznake za dodatne tehnologije
    }
  ];

  // Animacijski varijante za kontejner
  const containerVariants = {
    hidden: { opacity: 0 }, // Skriveno stanje
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Postavljanje stajanja za djecu
      }
    }
  };

  // Animacijski varijante za kartice
  const cardVariants = {
    hidden: {
      opacity: 0, // Skriveno stanje
      y: 20 // Pomjeranje prema dolje
    },
    visible: {
      opacity: 1, // Vidljivo stanje
      y: 0,
      transition: {
        duration: 0.6, // Trajanje animacije
        ease: "easeOut" // Efekat izlaska
      }
    }
  };

  return (
    <SkillsContainer>
      <TypewriterTitle>
        {title}<span className="cursor">█</span> {/* Kursor za efekat kucanja */}
      </TypewriterTitle>
      <SkillsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Prikazivanje samo jednom
      >
        {skillsData.map((category, index) => ( // Mapiramo kategorije veština
          <SkillCard
            key={index} // Ključ za svaku karticu
            as={motion.div}
            variants={cardVariants}
            whileHover={{
              scale: 1.02, // Uvećanje pri prelasku miša
              boxShadow: "0 0 25px rgba(0, 255, 65, 0.5)" // Efekat sjene
            }}
            transition={{
              type: "spring", // Tip animacije
              stiffness: 300 // Otpornost opruge
            }}
          >
            <SkillTitle
              as={motion.div}
              whileHover={{
                textShadow: "0 0 8px rgba(0, 255, 65, 0.7)" // Efekat sjene pri prelasku miša
              }}
            >
              {category.icon} {category.category} {/* Ikona i naziv kategorije */}
            </SkillTitle>
            {category.skills.map((skill, skillIndex) => ( // Mapiramo veštine unutar kategorije
              <div key={skillIndex}>
                <motion.small
                  style={{ color: '#0f0' }} // Boja teksta
                  whileHover={{
                    color: "#00ff41", // Promjena boje pri prelasku miša
                    textShadow: "0 0 8px rgba(0, 255, 65, 0.7)" // Efekat sjene
                  }}
                >
                  {skill.icon && (
                    <motion.span
                      className="skill-icon"
                      whileHover={{ scale: 1.2 }} // Uvećanje ikone pri prelasku miša
                      transition={{ type: "spring", stiffness: 300 }} // Animacija
                    >
                      {skill.icon} {/* Ikona veštine */}
                    </motion.span>
                  )}
                  {skill.name} {/* Naziv veštine */}
                </motion.small>
                <SkillBar
                  as={motion.div}
                  initial={{ width: 0 }} // Početna širina
                  whileInView={{ width: `${skill.level}%` }} // Širina na osnovu nivoa veštine
                  transition={{ duration: 1, ease: "easeOut" }} // Animacija
                  viewport={{ once: true }} // Prikazivanje samo jednom
                  data-level={skill.level} // Podaci o nivou veštine
                  style={{ '--progress': `${skill.level}%` }} // Stil za nivo
                />
              </div>
            ))}
            <div style={{ marginTop: '1rem' }}>
              {category.tags.map((tag, tagIndex) => ( // Mapiramo oznake
                <SkillTag
                  key={tagIndex}
                  as={motion.span}
                  whileHover={{
                    scale: 1.1, // Uvećanje oznake pri prelasku miša
                    boxShadow: "0 0 15px rgba(0, 255, 65, 0.5)" // Efekat sjene
                  }}
                  transition={{ type: "spring", stiffness: 300 }} // Animacija
                >
                  {tag} {/* Oznaka */}
                </SkillTag>
              ))}
            </div>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; // Izvozimo komponentu Skills
