import React, { useState, useEffect } from 'react'; // Uvozimo React i hookove useState i useEffect
import { motion } from 'framer-motion'; // Uvozimo motion za animacije
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Uvozimo ikone za GitHub i vanjske linkove
import {
  ProjectsContainer, // Kontejner za projekte
  ProjectsGrid, // Mreža za projekte
  ProjectCard, // Kartica za pojedinačni projekat
  ProjectImage, // Slika projekta
  ProjectContent, // Sadržaj projekta
  ProjectTitle, // Naslov projekta
  ProjectDescription, // Opis projekta
  TechStack, // Tehnološki skup
  TechTag, // Oznaka tehnologije
  ProjectLinks, // Linkovi za projekte
  TypewriterTitle // Naslov sa efektom kucanja
} from './Projects.styles'; // Uvozimo stilove za projekte

const Projects = () => {
  const [title, setTitle] = useState(''); // Stanje za naslov
  const fullTitle = '> projects.exe'; // Puni naslov koji će se prikazati

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

  // Lista projekata
  const projects = [
    {
      title: "Matrix Code Generator", // Naslov projekta
      description: "A real-time matrix code rain effect generator with customizable parameters and color schemes. Features multiple character sets and color themes.", // Opis projekta
      tech: ["React", "Three.js", "WebGL", "Styled Components"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/matrix-code", // GitHub link
      live: "https://matrix-code.demo.com", // Link za uživo prikaz
      image: "/img/img1.png" // putanja za sliku
    },
    {
      title: "Cyberpunk UI Kit", // Naslov projekta
      description: "A comprehensive UI component library inspired by cyberpunk aesthetics and sci-fi interfaces. Includes glitch effects and neon animations.", // Opis projekta
      tech: ["React", "TypeScript", "Storybook", "GSAP"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/cyberpunk-ui", // GitHub link
      live: "https://cyberpunk-ui.demo.com", // Link za uživo prikaz
      image: "/img/img2.png" // putanja za sliku
    },
    {
      title: "Neural Network Visualizer", // Naslov projekta
      description: "Interactive visualization tool for neural networks with real-time training visualization and customizable network architectures.", // Opis projekta
      tech: ["JavaScript", "TensorFlow.js", "D3.js", "Node.js"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/neural-viz", // GitHub link
      live: "https://neural-viz.demo.com", // Link za uživo prikaz
      image: "/img/img3.png" // putanja za sliku
    },
    {
      title: "Quantum Circuit Simulator", // Naslov projekta
      description: "Web-based quantum circuit simulator with visual programming interface and real-time state visualization.", // Opis projekta
      tech: ["React", "Python", "WebAssembly", "Qiskit"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/quantum-sim", // GitHub link
      live: "https://quantum-sim.demo.com", // Link za uživo prikaz
      image: "/img/img4.png" // putanja za sliku
    },
    {
      title: "Holographic Display UI", // Naslov projekta
      description: "A futuristic holographic user interface with 3D projections and gesture controls using webcam input.", // Opis projekta
      tech: ["Three.js", "TensorFlow", "WebGL", "React"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/holo-ui", // GitHub link
      live: "https://holo-ui.demo.com", // Link za uživo prikaz
      image: "/img/img5.png" // putanja za sliku
    },
    {
      title: "Cyber Security Dashboard", // Naslov projekta
      description: "Real-time network security monitoring dashboard with threat visualization and automated response systems.", // Opis projekta
      tech: ["React", "D3.js", "Socket.io", "Node.js"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/security-dash", // GitHub link
      live: "https://security-dash.demo.com", // Link za uživo prikaz
      image: "/img/img6.png" // putanja za sliku
    },
    {
      title: "AI Chat Interface", // Naslov projekta
      description: "Advanced chat interface with AI-powered responses and dynamic conversation flows. Features voice input and synthesis.", // Opis projekta
      tech: ["React", "OpenAI API", "WebSpeech API", "Firebase"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/ai-chat", // GitHub link
      live: "https://ai-chat.demo.com", // Link za uživo prikaz
      image: "/img/img7.png" // putanja za sliku
    },
    {
      title: "Biometric Authentication", // Naslov projekta
      description: "Facial recognition and fingerprint authentication system with liveness detection and anti-spoofing measures.", // Opis projekta
      tech: ["React Native", "TensorFlow", "Python", "OpenCV"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/bio-auth", // GitHub link
      live: "https://bio-auth.demo.com", // Link za uživo prikaz
      image: "/img/img8.png" // putanja za sliku
    },
    {
      title: "Virtual Reality Lab", // Naslov projekta
      description: "VR environment for scientific visualization and experimentation. Supports multiple users and real-time data visualization.", // Opis projekta
      tech: ["Unity", "WebXR", "Three.js", "WebSocket"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/vr-lab", // GitHub link
      live: "https://vr-lab.demo.com", // Link za uživo prikaz
      image: "/img/img9.png" // putanja za sliku
    },
    {
      title: "Augmented Reality HUD", // Naslov projekta
      description: "AR heads-up display system with real-time environmental data overlay and gesture-based interaction.", // Opis projekta
      tech: ["AR.js", "React", "WebGL", "TensorFlow"], // Tehnologije korištene u projektu
      github: "https://github.com/yourusername/ar-hud", // GitHub link
      live: "https://ar-hud.demo.com", // Link za uživo prikaz
      image: "/img/img10.png" // putanja za sliku
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

  // Animacijski varijante za pojedinačne projekte
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 30 // Pomjeranje prema dolje
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" // Efekat izlaska
      }
    }
  };

  const MotionLink = motion.a; // Definišemo motion.a za linkove

  return (
    <ProjectsContainer>
      <TypewriterTitle>
        {title}<span className="cursor">█</span> {/* Kursor za efekat kucanja */}
      </TypewriterTitle>
      <ProjectsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Prikazivanje samo jednom
      >
        {projects.map((project, index) => ( // Mapiramo projekte
          <ProjectCard
            key={index}
            as={motion.div}
            variants={projectVariants}
            whileHover={{
              scale: 1.02, // Uvećanje pri prelasku miša
              boxShadow: "0 0 25px rgba(0, 255, 65, 0.5)" // Efekat sjene
            }}
            transition={{
              type: "spring",
              stiffness: 300 // Otpornost opruge
            }}
          >
            <ProjectImage
              as={motion.div}
              whileHover={{
                scale: 1.05, // Uvećanje slike pri prelasku miša
                filter: "brightness(1.2)" // Povećanje svjetline
              }}
              transition={{ duration: 0.3 }} // Trajanje animacije
            >
              <img src={project.image} alt={project.title} /> {/* Slika projekta */}
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }} // Početna nevidljivost
                whileHover={{ opacity: 1 }} // Povećanje vidljivosti pri prelasku miša
                transition={{ duration: 0.3 }} // Trajanje animacije
              />
            </ProjectImage>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle> {/* Naslov projekta */}
              <ProjectDescription>{project.description}</ProjectDescription> {/* Opis projekta */}

              <TechStack>
                {project.tech.map((tech, techIndex) => ( // Mapiramo tehnologije
                  <TechTag
                    key={techIndex}
                    as={motion.span}
                    whileHover={{
                      scale: 1.1, // Uvećanje oznake pri prelasku miša
                      color: "#00ff41", // Promjena boje
                      textShadow: "0 0 8px rgba(0, 255, 65, 0.7)" // Efekat sjene
                    }}
                    transition={{ duration: 0.2 }} // Trajanje animacije
                  >
                    {tech} {/* Ime tehnologije */}
                  </TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                <MotionLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1, // Uvećanje linka pri prelasku miša
                    y: -2 // Pomjeranje prema gore
                  }}
                  whileTap={{ scale: 0.95 }} // Smanjenje pri kliku
                >
                  <FaGithub /> Source {/* Ikona za GitHub */}
                </MotionLink>
                <MotionLink
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1, // Uvećanje linka pri prelasku miša
                    y: -2 // Pomjeranje prema gore
                  }}
                  whileTap={{ scale: 0.95 }} // Smanjenje pri kliku
                >
                  <FaExternalLinkAlt /> Demo {/* Ikona za vanjski link */}
                </MotionLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; // Izvozimo komponentu Projects
