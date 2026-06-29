import React, { useState, useEffect, useMemo } from 'react'; // Uvozimo React biblioteku i hookove useState, useEffect i useMemo
import MatrixRain from '../MatrixRain/MatrixRain'; // Uvozimo MatrixRain komponentu koja prikazuje efekt "kiše koda"
import {
  HeroSection,
  TerminalWindow,
  TerminalHeader,
  TerminalBody,
  TerminalText,
  TerminalPrompt,
  TerminalCursor,
  ButtonContainer
} from './Hero.styles'; // Uvozimo stilizirane komponente za izgled Hero sekcije

const Hero = () => {
  const [text, setText] = useState(''); // State varijabla koja čuva trenutno ispisani tekst u terminalu
  const [showPrompt, setShowPrompt] = useState(false); // State varijabla koja kontroliše prikazivanje prompta

  // useMemo se koristi za optimizaciju i sprečava ponovno generisanje stringa pri svakom renderovanju komponente
   //Tekst koji će se prikazivati unutar terminala
  const terminalText = useMemo(() => `
> Initializing system...
> Running security protocols...
> Accessing mainframe...
> Bypassing firewall...
> Access granted
> Loading profile: CYBER.DEV
> Status: ACTIVE
> Security level: MAXIMUM
> System ready.

Type 'help' for available commands...
`, []); // Prazna zavisnost [] znači da će se vrijednost terminalText izračunati samo jednom prilikom prvog rendera

  useEffect(() => { // useEffect se koristi za postepeno ispisivanje teksta kao animacija
    let index = 0; // Indeks koji označava trenutno slovo koje se ispisuje
    const timer = setInterval(() => {
      setText(terminalText.slice(0, index)); // Uzima dio stringa od početka do trenutnog indeksa i postavlja ga u state
      index++; // Povećavamo indeks kako bi se sljedeće slovo dodalo u animaciji
      if (index > terminalText.length) { // Ako smo ispisali sav tekst
        clearInterval(timer); // Prekidamo interval kako bi zaustavili animaciju teksta
        setShowPrompt(true); // Postavljamo showPrompt na true kako bismo prikazali prompt
      }
    }, 50); // Svakih 50ms se dodaje novo slovo u tekst

    return () => clearInterval(timer); // Očistimo interval kada se komponenta unmount-a kako bismo spriječili curenje memorije
  }, [terminalText]); // useEffect se pokreće svaki put kada se terminalText promijeni (što se dešava samo jednom)

  return (
    <HeroSection> {/* Glavni kontejner za Hero sekciju */}
      <MatrixRain /> {/* Prikazuje MatrixRain efekt u pozadini */}
      <TerminalWindow> {/* Kontejner koji simulira izgled terminala */}
        <TerminalHeader> {/* Gornji dio terminala koji sadrži dugmad i naslov */}
          <div className="buttons"> {/* Dugmad za minimizaciju, maksimizaciju i zatvaranje prozora */}
            <span></span> {/* Simulira dugme */}
            <span></span> {/* Simulira dugme */}
            <span></span> {/* Simulira dugme */}
          </div>
          <div className="title">root@cyber-system:~# </div> {/* Naslov terminala, koji simulira prompt sistema */}
        </TerminalHeader>
        <TerminalBody> {/* Glavni sadržaj terminala */}
          <TerminalText>
            {text} {/* Ispisuje animirani tekst koji se postepeno pojavljuje */}
          </TerminalText>
          {showPrompt && ( // Ako je showPrompt true, prikazuje se prompt sa kursorom
            <TerminalPrompt>
              root@cyber-system:~# <TerminalCursor>█</TerminalCursor> {/* Prompt linija sa trepćućim kursorom */}
            </TerminalPrompt>
          )}
          <ButtonContainer> {/* Kontejner koji sadrži interaktivne dugmiće */}
            <a href="#about" data-text="[ENTER_SYSTEM]">[ENTER_SYSTEM]</a> {/* Dugme za ulazak u sistem */}
            <a href="#projects" data-text="[VIEW_PROJECTS]">[VIEW_PROJECTS]</a> {/* Dugme za pregled projekata */}
            <a href="#contact" data-text="[MAKE_CONTACT]">[MAKE_CONTACT]</a> {/* Dugme za kontaktiranje */}
          </ButtonContainer>
        </TerminalBody>
      </TerminalWindow>
    </HeroSection>
  );
};

export default Hero; // Izvozimo Hero komponentu kako bi se mogla koristiti u drugim dijelovima aplikacije
