import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  Section,
  Form,
  InputWrapper,
  Input,
  TextArea,
  InfoItem,
  ContactInfo,
  Title,
  MatrixButton
} from './ContactMatrix.styles';
// import CyberButton from '../common/CyberButton';

// Glavna komponenta za kontakt formu
const ContactMatrix = () => {
  const [formData, setFormData] = useState({ // Stanje za podatke iz forme
    name: '',
    email: '',
    message: ''
  });

  // Funkcija za slanje forme
  const handleSubmit = (e) => {
    e.preventDefault(); // Sprečava podrazumevano ponašanje
    console.log(formData); // Ispisuje podatke u konzolu
  };

  // Funkcija za promenu podataka u formi
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Ažurira stanje na osnovu imena inputa
    });
  };

  return (
    <Section id="contact"> {/* Sekcija za kontakt */}
      <Title>INITIALIZE_CONTACT</Title> {/* Naslov sekcije */}
      <Form onSubmit={handleSubmit}> {/* Forma za kontakt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Početna animacija
          whileInView={{ opacity: 1, y: 0 }} // Animacija pri ulasku u vidno polje
          transition={{ duration: 0.5 }} // Trajanje animacije
          viewport={{ once: true }} // Animacija se pokreće samo jednom
        >
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="ENTER_NAME.exe" // Placeholder za ime
              value={formData.name} // Vrednost inputa
              onChange={handleChange} // Funkcija za promenu
              required // Obavezno polje
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="ENTER_EMAIL.sys" // Placeholder za email
              value={formData.email} // Vrednost inputa
              onChange={handleChange} // Funkcija za promenu
              required // Obavezno polje
            />
          </InputWrapper>
          <InputWrapper>
            <TextArea
              name="message"
              placeholder="ENTER_MESSAGE.txt" // Placeholder za poruku
              value={formData.message} // Vrednost textarea
              onChange={handleChange} // Funkcija za promenu
              required // Obavezno polje
            />
          </InputWrapper>
          <MatrixButton
            type="submit"
            as={motion.button} // Animacija na dugmetu
            whileHover={{ scale: 1.05 }} // Uvećanje pri pregledu
            whileTap={{ scale: 0.95 }} // Smanjenje pri dodiru
          >
            <span className="glitch-text">EXECUTE_TRANSMISSION</span> {/* Tekst na dugmetu */}
            <span className="scan-line"></span> {/* Linija skeniranja */}
          </MatrixButton>
        </motion.div>
      </Form>

      <ContactInfo
        as={motion.div}
        initial={{ opacity: 0, y: 20 }} // Početna animacija
        whileInView={{ opacity: 1, y: 0 }} // Animacija pri ulasku u vidno polje
        transition={{ duration: 0.6, delay: 0.2 }} // Trajanje animacije
      >
        <InfoItem>
          <FaPhone /> {/* Ikona telefona */}
          <span>+1 234 567 890</span> {/* Broj telefona */}
        </InfoItem>
        <InfoItem>
          <FaEnvelope /> {/* Ikona emaila */}
          <span>your@email.com</span> {/* Email adresa */}
        </InfoItem>
        <InfoItem>
          <FaMapMarkerAlt /> {/* Ikona lokacije */}
          <span>New York, USA</span> {/* Lokacija */}
        </InfoItem>
      </ContactInfo>
    </Section>
  );
};

export default ContactMatrix; // Izvoz komponente
