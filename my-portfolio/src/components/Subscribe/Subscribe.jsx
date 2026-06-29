import React, { useState, useEffect } from 'react'; // Uvozimo React i hookove useState i useEffect
import { motion } from 'framer-motion'; // Uvozimo motion za animacije
import {
  SubscribeSection, // Sekcija za pretplatu
  Form, // Forma za unos
  InputWrapper, // Wrapper za unos
  Input, // Polje za unos
  SubscribeButton, // Dugme za pretplatu
  SuccessMessage, // Poruka o uspehu
  ErrorMessage, // Poruka o grešci
  TypewriterTitle // Naslov sa efektom kucanja
} from './Subscribe.styles'; // Uvozimo stilove za pretplatu

const Subscribe = () => {
  const [email, setEmail] = useState(''); // Stanje za email
  const [status, setStatus] = useState({ success: false, error: null }); // Stanje za status pretplate
  const [title, setTitle] = useState(''); // Stanje za naslov
  const fullTitle = '> subscribe.exe'; // Puni naslov koji će se prikazati

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sprečavamo podrazumevano ponašanje forme
    try {
      setStatus({ success: true, error: null }); // Postavljamo status uspeha
      setEmail(''); // Resetujemo email
    } catch (error) {
      setStatus({ success: false, error: 'Subscription failed. Please try again.' }); // Postavljamo status greške
    }
  };

  return (
    <SubscribeSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Početno stanje
        whileInView={{ opacity: 1, y: 0 }} // Stanje kada je u vidnom polju
        transition={{ duration: 0.6 }} // Trajanje animacije
        viewport={{ once: true }} // Prikazivanje samo jednom
      >
        <TypewriterTitle>
          {title}<span className="cursor">█</span> {/* Kursor za efekat kucanja */}
        </TypewriterTitle>

        <Form
          onSubmit={handleSubmit} // Funkcija za obradu podnošenja forme
          as={motion.form} // Koristimo motion.form za animacije
          initial={{ opacity: 0, scale: 0.95 }} // Početno stanje
          whileInView={{ opacity: 1, scale: 1 }} // Stanje kada je u vidnom polju
          transition={{ duration: 0.5, delay: 0.2 }} // Animacija
          viewport={{ once: true }} // Prikazivanje samo jednom
        >
          <InputWrapper>
            <Input
              type="email" // Tip polja
              placeholder="ENTER_EMAIL.sys" // Placeholder
              value={email} // Vrednost polja
              onChange={(e) => setEmail(e.target.value)} // Funkcija za promenu
              required // Obavezno polje
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Regex obrazac za email
              title="Please enter a valid email address" // Poruka za nevalidan email
            />
          </InputWrapper>

          <SubscribeButton
            type="submit" // Tip dugmeta
            as={motion.button} // Koristimo motion.button za animacije
            whileHover={{ scale: 1.02 }} // Uvećanje pri prelasku miša
            whileTap={{ scale: 0.98 }} // Smanjenje pri kliku
          >
            EXECUTE_SUBSCRIPTION {/* Tekst na dugmetu */}
          </SubscribeButton>

          {status.success && (
            <SuccessMessage
              as={motion.div}
              initial={{ opacity: 0, y: -10 }} // Početno stanje
              animate={{ opacity: 1, y: 0 }} // Animacija uspeha
              exit={{ opacity: 0, y: 10 }} // Animacija izlaska
            >
               Subscription successful! Check your inbox for confirmation. {/* Poruka o uspehu */}
            </SuccessMessage>
          )}

          {status.error && (
            <ErrorMessage
              as={motion.div}
              initial={{ opacity: 0 }} // Početno stanje
              animate={{ opacity: 1 }} // Animacija greške
              exit={{ opacity: 0 }} // Animacija izlaska
            >
               ERROR: {status.error} {/* Poruka o grešci */} 
            </ErrorMessage>
          )}
        </Form>
      </motion.div>
    </SubscribeSection>
  );
};

export default Subscribe; // Izvozimo komponentu Subscribe
