import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TestimonialsSection,
  TypewriterTitle,
  TestimonialsGrid,
  TestimonialCard,
  Quote,
  Author,
  Role,
  MatrixBackground
} from './Testimonial.styles';

const Testimonials = () => {
  const [title, setTitle] = useState('');
  const fullTitle = '> testimonials.exe';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTitle(fullTitle.slice(0, index));
      index++;
      if (index > fullTitle.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Working with this developer was like entering the Matrix - everything just clicked into place. The code was clean, efficient, and exactly what we needed.",
      author: "Thomas Anderson",
      role: "Chief Technology Officer",
      company: "Matrix Systems Inc."
    },
    {
      quote: "Exceptional problem-solving skills and a deep understanding of modern web technologies. The end result exceeded our expectations.",
      author: "Trinity Smith",
      role: "Lead Developer",
      company: "Cyber Solutions"
    },
    {
      quote: "A true professional who delivers high-quality code consistently. Their attention to detail and innovative solutions are remarkable.",
      author: "Morpheus Johnson",
      role: "Project Manager",
      company: "Digital Fortress"
    }
  ];

  return (
    <TestimonialsSection>
      <MatrixBackground />
      <TypewriterTitle>
        {title}<span className="cursor">█</span>
      </TypewriterTitle>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialCard>
              <Quote>
                <span className="quote-mark">&gt; </span>
                {testimonial.quote}
              </Quote>
              <Author>
                <span className="prefix">$ </span>
                {testimonial.author}
              </Author>
              <Role>
                <span className="prefix">@ </span>
                {testimonial.role} - {testimonial.company}
              </Role>
            </TestimonialCard>
          </motion.div>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials; 