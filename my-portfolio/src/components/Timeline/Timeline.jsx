import React from 'react'; // Uvozimo React biblioteku
import { TimelineContainer, TimelineItem, TimelineContent } from './Timeline.styles'; // Uvozimo stilizovane komponente iz Timeline.styles
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'; // Uvozimo ikone iz react-icons biblioteke

// Definišemo funkcionalnu komponentu Timeline
const Timeline = () => {
  // Definišemo podatke za vremensku liniju
  const timelineData = [
    {
      date: '2023 - Present', // Datum
      title: 'Full Stack Developer', // Naslov
      description: 'Building modern web applications with React, Node.js, and cutting-edge technologies', // Opis
      icon: <FaLaptopCode />, // Ikona
      type: 'work' // Tip (rad)
    },
    {
      date: '2022 - 2023', // Datum
      title: 'Web Development Bootcamp', // Naslov
      description: 'Intensive training in modern web development technologies and best practices', // Opis
      icon: <FaGraduationCap />, // Ikona
      type: 'education' // Tip (obrazovanje)
    },
    {
      date: '2021 - 2022', // Datum
      title: 'Frontend Developer', // Naslov
      description: 'Creating responsive and interactive user interfaces with React and TypeScript', // Opis
      icon: <FaCode />, // Ikona
      type: 'work' // Tip (rad)
    }
  ];

  // Vraćamo JSX koji prikazuje vremensku liniju
  return (
    <TimelineContainer>
      {timelineData.map((item, index) => ( // Mapiramo kroz timelineData
        <TimelineItem
          key={index} // Ključ za jedinstvenost
          $position={index % 2 === 0 ? 'left' : 'right'} // Određujemo poziciju na osnovu indeksa
          $delay={index * 0.3} // Određujemo kašnjenje animacije
        >
          <TimelineContent $type={item.type}> {/* // Stilizovani sadržaj vremenske linije*/}
            <div className="icon">{item.icon}</div>  {/*// Prikazujemo ikonu */}
            <h3>{item.title}</h3> {/*// Prikazujemo naslov  */}
            <p className="date">{item.date}</p>  {/*// Prikazujemo datum */}
            <p className="description">{item.description}</p>  {/*// Prikazujemo opis */}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

// Izvozimo komponentu Timeline
export default Timeline;
