import { keyframes } from 'styled-components'; // Uvozimo keyframes iz styled-components za definisanje animacija

// Animacija za efekat kiše matrice
export const matrixRain = keyframes`
  0% {
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; // Početni sjaj
    transform: translateY(-100%); // Pomjeranje iznad
    opacity: 0; // Početna neprozirnost
  }
  50% {
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}, // Srednji sjaj
                0 0 30px ${({ theme }) => theme.colors.primary}; // Dodatni sjaj
    opacity: 1; // Kraj neprozirnosti
  }
  100% {
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; // Povratak sjaja
    transform: translateY(100%); // Pomjeranje dolje
    opacity: 0; // Kraj neprozirnosti
  }
`;

// Animacija za glitch efekat teksta
export const glitchText = keyframes`
  0% {
    text-shadow: 0.05em 0 0 ${({ theme }) => theme.colors.glitch.red}, // Crvena sjena
                -0.05em -0.025em 0 ${({ theme }) => theme.colors.glitch.blue}, // Plava sjena
                -0.025em 0.05em 0 ${({ theme }) => theme.colors.glitch.green}; // Zelena sjena
  }
  14% {
    text-shadow: 0.05em 0 0 ${({ theme }) => theme.colors.glitch.red}, // Održavanje sjene
                -0.05em -0.025em 0 ${({ theme }) => theme.colors.glitch.blue},
                -0.025em 0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
  15% {
    text-shadow: -0.05em -0.025em 0 ${({ theme }) => theme.colors.glitch.red}, // Promjena sjene
                0.025em 0.025em 0 ${({ theme }) => theme.colors.glitch.blue},
                -0.05em -0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
  49% {
    text-shadow: -0.05em -0.025em 0 ${({ theme }) => theme.colors.glitch.red},
                0.025em 0.025em 0 ${({ theme }) => theme.colors.glitch.blue},
                -0.05em -0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
  50% {
    text-shadow: 0.025em 0.05em 0 ${({ theme }) => theme.colors.glitch.red},
                0.05em 0 0 ${({ theme }) => theme.colors.glitch.blue},
                0 -0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
  99% {
    text-shadow: 0.025em 0.05em 0 ${({ theme }) => theme.colors.glitch.red},
                0.05em 0 0 ${({ theme }) => theme.colors.glitch.blue},
                0 -0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
  100% {
    text-shadow: -0.025em 0 0 ${({ theme }) => theme.colors.glitch.red},
                -0.025em -0.025em 0 ${({ theme }) => theme.colors.glitch.blue},
                -0.025em -0.05em 0 ${({ theme }) => theme.colors.glitch.green};
  }
`;

// Animacija za lebdenje
export const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); } // Početna i završna pozicija
  25% { transform: translateY(-10px) rotate(-2deg); } // Pomjeranje prema gore
  75% { transform: translateY(10px) rotate(2deg); } // Pomjeranje prema dolje
`;

// Animacija za skeniranje
export const scanline = keyframes`
  0% {
    transform: translateY(-100%); // Početno pomjeranje
    opacity: 0; // Početna neprozirnost
  }
  50% {
    opacity: 1; // Kraj neprozirnosti
  }
  100% {
    transform: translateY(100%); // Pomjeranje dolje
    opacity: 0; // Kraj neprozirnosti
  }
`;

// Animacija za granicu matrice
export const matrixBorder = keyframes`
  0% {
    border-color: ${({ theme }) => theme.colors.primary}40; // Početna boja granice
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Početni sjaj
  }
  50% {
    border-color: ${({ theme }) => theme.colors.primary}; // Kraj boje granice
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}80; // Kraj sjaja
  }
  100% {
    border-color: ${({ theme }) => theme.colors.primary}40; // Povratak boje granice
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Povratak sjaja
  }
`;

// Animacija za ulazak s lijeve strane
export const slideInFromLeft = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateX(-100px); // Pomjeranje lijevo
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateX(0); // Vraćanje na originalnu poziciju
  }
`;

// Animacija za ulazak s desne strane
export const slideInFromRight = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateX(100px); // Pomjeranje desno
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateX(0); // Vraćanje na originalnu poziciju
  }
`;

// Animacija za fade-in sa pomjeranjem prema gore
export const fadeInUp = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateY(30px); // Pomjeranje prema dolje
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
  }
`;

// Animacija za glitch efekat
export const glitchAnim = keyframes`
  0% {
    transform: translate(0); // Početna pozicija
  }
  20% {
    transform: translate(-2px, 2px); // Pomjeranje lijevo-dolje
  }
  40% {
    transform: translate(-2px, -2px); // Pomjeranje lijevo-gore
  }
  60% {
    transform: translate(2px, 2px); // Pomjeranje desno-dolje
  }
  80% {
    transform: translate(2px, -2px); // Pomjeranje desno-gore
  }
  100% {
    transform: translate(0); // Povratak na originalnu poziciju
  }
`;

// Animacija za pulsiranje sjaja
export const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Početni sjaj
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}, // Srednji sjaj
                0 0 30px ${({ theme }) => theme.colors.primary}; // Dodatni sjaj
  }
  100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Povratak sjaja
  }
`;

// Animacija za rotaciju
export const rotateIn = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: rotate(-180deg) scale(0); // Početna rotacija i skala
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: rotate(0) scale(1); // Kraj rotacije i skale
  }
`;

// Animacija za zumiranje
export const zoomIn = keyframes`
  from {
    transform: scale(1); // Početna skala
    box-shadow: 0 0 0 rgba(0, 255, 65, 0); // Početni sjaj
  }
  to {
    transform: scale(1.05); // Kraj skale
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.3); // Kraj sjaja
  }
`;

// Animacija za otkrivanje pri skrolovanju
export const scrollReveal = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateY(50px); // Pomjeranje prema dolje
    filter: blur(10px); // Početni blur
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
    filter: blur(0); // Kraj blura
  }
`;

// Animacija za pulsiranje sjaja pri skrolovanju
export const glowPulseOnScroll = keyframes`
  0% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}20; // Početni sjaj
    border-color: ${({ theme }) => theme.colors.primary}40; // Početna boja granice
  }
  50% {
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}, // Srednji sjaj
                0 0 50px ${({ theme }) => theme.colors.primary}50; // Dodatni sjaj
    border-color: ${({ theme }) => theme.colors.primary}; // Kraj boje granice
  }
  100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}20; // Povratak sjaja
    border-color: ${({ theme }) => theme.colors.primary}40; // Povratak boje granice
  }
`;

// Animacija za otkrivanje teksta matrice
export const matrixTextReveal = keyframes`
  0% {
    opacity: 0; // Početna neprozirnost
    transform: translateY(20px); // Pomjeranje prema dolje
    text-shadow: 0 0 0 ${({ theme }) => theme.colors.primary}; // Početni sjaj
  }
  50% {
    opacity: 0.5; // Polu neprozirnost
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}; // Srednji sjaj
  }
  100% {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; // Kraj sjaja
  }
`;

// Animacija za zumiranje efekta
export const zoomInEffect = keyframes`
  from {
    transform: scale(1); // Početna skala
    box-shadow: 0 0 0 rgba(0, 255, 65, 0); // Početni sjaj
  }
  to {
    transform: scale(1.1); // Kraj skale
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}50; // Kraj sjaja
  }
`;

// Animacija za rotaciju i zumiranje
export const rotateAndZoom = keyframes`
  0% {
    transform: scale(1) rotate(0deg); // Početna pozicija
  }
  50% {
    transform: scale(0.9) rotate(720deg); // Srednja pozicija
  }
  100% {
    transform: scale(1.1) rotate(720deg); // Kraj pozicije
  }
`;

// Animacija za pomjeranje prema gore sa fade efektom
export const slideUpFade = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateY(50px); // Pomjeranje prema dolje
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
  }
`;

// Animacija za pomjeranje prema dolje sa fade efektom
export const slideDownFade = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: translateY(-50px); // Pomjeranje prema gore
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: translateY(0); // Vraćanje na originalnu poziciju
  }
`;

// Animacija za skaliranje
export const scaleIn = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: scale(0.8); // Početna skala
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: scale(1); // Kraj skale
  }
`;

// Animacija za rotaciju i skaliranje
export const rotateInScale = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: rotate(-180deg) scale(0.3); // Početna rotacija i skala
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: rotate(0) scale(1); // Kraj rotacije i skale
  }
`;

// Animacija za flip efekat u X pravcu
export const flipInX = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: rotateX(-90deg); // Početna rotacija
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: rotateX(0); // Kraj rotacije
  }
`;

// Animacija za flip efekat u Y pravcu
export const flipInY = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    transform: rotateY(-90deg); // Početna rotacija
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    transform: rotateY(0); // Kraj rotacije
  }
`;

// Animacija za bounce efekat
export const bounceIn = keyframes`
  0% {
    opacity: 0; // Početna neprozirnost
    transform: scale(0.3); // Početna skala
  }
  50% {
    opacity: 0.8; // Polu neprozirnost
    transform: scale(1.1); // Srednja skala
  }
  80% {
    opacity: 0.9; // Blaga neprozirnost
    transform: scale(0.89); // Smanjena skala
  }
  100% {
    opacity: 1; // Kraj neprozirnosti
    transform: scale(1); // Kraj skale
  }
`;

// Animacija za swing efekat
export const swingIn = keyframes`
  0% {
    opacity: 0; // Početna neprozirnost
    transform: rotateZ(-60deg); // Početna rotacija
    transform-origin: top; // Tačka rotacije
  }
  100% {
    opacity: 1; // Kraj neprozirnosti
    transform: rotateZ(0); // Kraj rotacije
    transform-origin: top; // Tačka rotacije
  }
`;

// Animacija za blur efekat
export const blurIn = keyframes`
  from {
    opacity: 0; // Početna neprozirnost
    filter: blur(20px); // Početni blur
    transform: scale(1.2); // Početna skala
  }
  to {
    opacity: 1; // Kraj neprozirnosti
    filter: blur(0); // Kraj blura
    transform: scale(1); // Kraj skale
  }
`;

// Animacija za glitch efekat
export const glitchIn = keyframes`
  0% {
    opacity: 0; // Početna neprozirnost
    transform: translate(-10px) skew(-10deg); // Početna pozicija
    text-shadow: -2px 0 ${({ theme }) => theme.colors.primary}; // Početni sjaj
  }
  25% {
    opacity: 0.5; // Polu neprozirnost
    transform: translate(10px) skew(10deg); // Pomjeranje
    text-shadow: 2px 0 ${({ theme }) => theme.colors.primary}; // Srednji sjaj
  }
  50% {
    opacity: 1; // Kraj neprozirnosti
    transform: translate(-5px) skew(5deg); // Pomjeranje
    text-shadow: -1px 0 ${({ theme }) => theme.colors.primary}; // Kraj sjaja
  }
  100% {
    opacity: 1; // Kraj neprozirnosti
    transform: translate(0) skew(0); // Povratak na originalnu poziciju
    text-shadow: none; // Bez sjene
  }
`;

// Animacija za cyber hover efekat
export const cyberHover = keyframes`
  0% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Početni sjaj
    border-color: ${({ theme }) => theme.colors.primary}40; // Početna boja granice
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}, // Srednji sjaj
                0 0 30px ${({ theme }) => theme.colors.primary}80; // Dodatni sjaj
    border-color: ${({ theme }) => theme.colors.primary}; // Kraj boje granice
  }
  100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}40; // Povratak sjaja
    border-color: ${({ theme }) => theme.colors.primary}40; // Povratak boje granice
  }
`;

// Animacija za hover efekat projekta
export const projectHover = keyframes`
  0% {
    transform: translateY(0) scale(1); // Početna pozicija
  }
  50% {
    transform: translateY(-5px) scale(1.02); // Pomjeranje prema gore
  }
  100% {
    transform: translateY(0) scale(1); // Povratak na originalnu poziciju
  }
`;

// Animacija za hover efekat veštine
export const skillHover = keyframes`
  0% {
    transform: rotate(0deg); // Početna rotacija
  }
  25% {
    transform: rotate(-3deg); // Pomjeranje lijevo
  }
  75% {
    transform: rotate(3deg); // Pomjeranje desno
  }
  100% {
    transform: rotate(0deg); // Povratak na originalnu poziciju
  }
`;
