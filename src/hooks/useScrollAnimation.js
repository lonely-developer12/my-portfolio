import { useEffect, useRef } from 'react';

// Custom hook za animaciju prilikom skrolovanja
export const useScrollAnimation = (
  options = {
    threshold: 0.2, // Granica za aktivaciju animacije
    animation: 'slideUpFade', // Tip animacije
    delay: 0, // Kašnjenje animacije
    duration: 0.6, // Trajanje animacije
    stagger: 0.1, // Udaljenost između animacija
  }
) => {
  const elementRef = useRef(null); // Referenca na element koji će biti animiran

  useEffect(() => {
    // Kreiranje IntersectionObserver-a za praćenje vidljivosti elementa
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { // Ako je element vidljiv
            const element = entry.target;
            element.style.opacity = '0'; // Postavljanje početne nevidljivosti
            element.style.animation = 'none'; // Resetovanje animacije

            setTimeout(() => {
              // Postavljanje stilova za animaciju
              element.style.opacity = '1'; // Postavljanje vidljivosti
              element.style.animation = `${options.animation} ${options.duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
              element.style.animationDelay = `${options.delay}s`; // Postavljanje kašnjenja
            }, 50);

            observer.unobserve(element); // Prestanak praćenja elementa
          }
        });
      },
      { threshold: options.threshold } // Postavljanje granice
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Praćenje elementa
    }

    return () => observer.disconnect(); // Oslobađanje resursa
  }, [options]);

  return elementRef; // Vraćanje reference na element
};
