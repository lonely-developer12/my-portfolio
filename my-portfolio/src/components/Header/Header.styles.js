import styled, { keyframes } from 'styled-components'; // Uvozimo styled-components i keyframes za animacije

const glitchAnim = keyframes` // Animacija za glitch efekat
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const scanlineAnim = keyframes` // Animacija za scanline efekat
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const HeaderContainer = styled.header` // Stilizovani kontejner za header
  position: fixed; // Fiksna pozicija
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  transition: all 0.3s ease;
  background: ${({ $isScrolled }) => // Pozadina zavisi od skrolovanja
    $isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(10px)' : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { // Medijska pravila za mobilne uređaje
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ $isScrolled }) => ($isScrolled ? '0.5' : '0')};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }
`;

export const Nav = styled.nav` // Stilizovana navigacija
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div` // Stilizovani logo
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: relative;
`;

export const GlitchEffect = styled.div` // Stilizovani efekat glitch
  position: relative;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  &::before {
    color: ${({ theme }) => theme.colors.accent};
    animation: ${glitchAnim} 2s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px);
  }

  &::after {
    color: ${({ theme }) => theme.colors.secondary};
    animation: ${glitchAnim} 2s infinite reverse;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(2px);
  }
`;

export const NavItems = styled.div` // Stilizovani elementi navigacije
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavItem = styled.button` // Stilizovani element navigacije
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};

    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const MobileMenuButton = styled.button` // Stilizovani dugme za mobilni meni
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
    transform-origin: 1px;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenu = styled.div` // Stilizovani mobilni meni
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin-top: 60px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(5px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent 0%,
      rgba(0, 255, 65, 0.03) 50%,
      transparent 100%
    );
    pointer-events: none;
    animation: ${scanlineAnim} 8s linear infinite;
  }
`;
