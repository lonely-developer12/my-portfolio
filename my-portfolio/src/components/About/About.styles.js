import styled from 'styled-components';
import { motion } from 'framer-motion';

// Sekcija za stilizovanje About sekcije
export const AboutSection = styled.section`
  padding: 100px 5%;
  background: black; /* Crna pozadina */
  position: relative;
  overflow: hidden;
  color: #00FF41; /* Zeleni tekst kao u retro terminalu */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 255, 65, 0.03) 0%, transparent 100%);
    pointer-events: none; /* Onemogućava interakciju sa pseudo-elementom */
  }
`;

// Kontejner za About sekciju
export const AboutContainer = styled.div`
  max-width: 1200px; /* Maksimalna širina kontejnera */
  margin: 0 auto; /* Centriranje kontejnera */
  display: grid; /* Grid layout */
  grid-template-columns: 1fr 1.5fr; /* Dve kolone */
  gap: 4rem; /* Razmak između kolona */
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr; /* Jedna kolona na manjim ekranima */
    gap: 2rem; /* Manji razmak */
  }
`;

// Kontejner za sliku
export const ImageContainer = styled.div`
  width: 100%; // Oder eine feste Breite, z.B. 300px
  max-width: 400px; // Begrenzung der Größe
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Falls das Bild zu groß ist, wird es beschnitten
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover; // Oder "contain", je nachdem, ob das Bild beschnitten werden darf
    border-radius: 15px;
  }
`;

// Stilizovana slika profila
export const ProfileImage = styled(motion.img)`
  width: 100%; /* Širina 100% */
  border-radius: 10px; /* Zaobljeni uglovi */
  position: relative;
  z-index: 2; /* Iznad granice */
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2); /* Senka oko slike */
`;

// Kontejner za sadržaj
export const ContentContainer = styled.div`
  position: relative;
`;

// Stil za naslov
export const Title = styled.h2`
  font-size: 2.5rem; /* Veličina fonta */
  color: #00FF41; /* Zeleni tekst */
  margin-bottom: 1rem; /* Razmak ispod naslova */
  position: relative;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.6), 0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.4); /* Efekat sjaja */

  &::after {
    content: '';
    position: absolute;
    bottom: -10px; /* Pozicija ispod naslova */
    left: 0;
    width: 60px; /* Širina linije */
    height: 4px; /* Visina linije */
    background: ${({ theme }) => theme.colors.primary}; /* Boja linije */
    border-radius: 2px; /* Zaobljeni uglovi linije */
  }
`;

// Stil za podnaslov
export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary}; /* Boja podnaslova */
  font-size: 1.2rem; /* Veličina fonta */
  margin-bottom: 2rem; /* Razmak ispod podnaslova */
  font-weight: 500; /* Debljina fonta */
`;

// Stilizovani opis
export const Description = styled(motion.p)`
  color: #00FF41; /* Zeleni tekst */
  font-size: 1.1rem; /* Veličina fonta */
  line-height: 1.8; /* Visina linije */
  margin-bottom: 2rem; /* Razmak ispod opisa */
  cursor: pointer; /* Kursor kao ruka */
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.6), 0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.4); /* Efekat sjaja */

  &:hover {
    transform: scale(1.1); /* Uvećanje pri pregledu */
    transition: transform 0.3s ease-in-out; /* Animacija */
  }
`;

// Istaknuta kutija
export const HighlightBox = styled.div`
  background: rgba(0, 255, 65, 0.05); /* Pozadina */
  border: 1px solid rgba(0, 255, 65, 0.1); /* Granica */
  border-radius: 10px; /* Zaobljeni uglovi */
  padding: 2rem; /* Unutrašnji razmak */
  margin-bottom: 2rem; /* Razmak ispod kutije */

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Boja naslova unutar kutije */
    margin-bottom: 1rem; /* Razmak ispod naslova */
  }
`;

// Tehnološki stack
export const TechStack = styled.div`
  display: flex; /* Flex layout */
  flex-wrap: wrap; /* Omogućava prelamanje */
  gap: 1rem; /* Razmak između stavki */
  margin-bottom: 2rem; /* Razmak ispod */
`;

// Stilizovana stavka tehnologije
export const TechItem = styled(motion.div)`
  background: rgba(0, 255, 65, 0.1); /* Pozadina */
  color: ${({ theme }) => theme.colors.primary}; /* Boja teksta */
  padding: 0.5rem 1rem; /* Unutrašnji razmak */
  border-radius: 20px; /* Zaobljeni uglovi */
  font-size: 0.9rem; /* Veličina fonta */
  cursor: pointer; /* Kursor kao ruka */
  transition: all 0.3s ease; /* Animacija */

  &:hover {
    background: rgba(0, 255, 65, 0.2); /* Promena pozadine pri pregledu */
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.3); /* Senka pri pregledu */
    transform: scale(1.1); /* Uvećanje pri pregledu */
  }
`;

// Sekcija za statistiku
export const Stats = styled.div`
  display: grid; /* Grid layout */
  grid-template-columns: repeat(3, 1fr); /* Tri kolone */
  gap: 2rem; /* Razmak između kolona */
  margin-top: 3rem; /* Razmak iznad sekcije */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; /* Jedna kolona na manjim ekranima */
    gap: 1rem; /* Manji razmak */
  }
`;

// Stilizovana stavka statistike
export const StatItem = styled.div`
  text-align: center; /* Centriranje teksta */
  padding: 1.5rem; /* Unutrašnji razmak */
  background: rgba(0, 255, 65, 0.05); /* Pozadina */
  border-radius: 10px; /* Zaobljeni uglovi */
  transition: all 0.3s ease; /* Animacija */

  &:hover {
    transform: translateY(-5px); /* Pomera se pri pregledu */
    box-shadow: 0 5px 15px rgba(0, 255, 65, 0.2); /* Senka pri pregledu */
  }
`;

// Stil za broj statistike
export const StatNumber = styled.div`
  font-size: 2.5rem; /* Veličina fonta */
  font-weight: 700; /* Debljina fonta */
  color: #00FF41; /* Zeleni tekst */
  margin-bottom: 0.5rem; /* Razmak ispod broja */
`;

// Stil za tekst statistike
export const StatText = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary}; /* Boja teksta */
  font-size: 1rem; /* Veličina fonta */
`;
