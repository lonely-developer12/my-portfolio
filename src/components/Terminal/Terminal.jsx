import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { glitchAnim, scanline, matrixRain } from '../../styles/animations';

const TerminalContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  border-radius: 4px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};
  margin: 2rem auto;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}30;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}40;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const TerminalTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const TerminalContent = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  position: relative;
`;

const Prompt = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  &::before {
    content: '>';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
    animation: ${glitchAnim} 2s infinite;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 4px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const ScanLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary}40;
  opacity: 0.5;
  animation: ${scanline} 6s linear infinite;
`;

const Output = styled.div`
  color: ${({ theme }) => theme.colors.primary}cc;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '10px'});
  transition: all 0.3s ease;
`;

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState('');
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const commands = [
    { input: 'whoami', output: '> Cyberpunk Developer' },
    { input: 'ls projects', output: '> Neural Interface\n> Cyber Security Hub\n> Digital Nexus' },
    { input: 'cat skills.txt', output: '> React | Node.js | TypeScript\n> AWS | Docker | GraphQL' },
    { input: 'ping matrix', output: '> Connection established...\n> Welcome to the Matrix' }
  ];

  useEffect(() => {
    const typeCommand = async () => {
      if (currentIndex >= commands.length) return;

      const command = commands[currentIndex];
      for (let i = 0; i <= command.input.length; i++) {
        setCurrentLine(command.input.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      await new Promise(resolve => setTimeout(resolve, 500));
      setHistory(prev => [...prev, { input: command.input, output: command.output }]);
      setCurrentLine('');
      setCurrentIndex(prev => prev + 1);
    };

    typeCommand();
  }, [currentIndex]);

  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalButton color="#ff5f56" />
        <TerminalButton color="#ffbd2e" />
        <TerminalButton color="#27c93f" />
        <TerminalTitle>cyberpunk_terminal -- /home/user</TerminalTitle>
      </TerminalHeader>
      <TerminalContent>
        <ScanLine />
        {history.map((entry, index) => (
          <div key={index}>
            <Prompt>{entry.input}</Prompt>
            <Output visible={true}>
              {entry.output.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </Output>
          </div>
        ))}
        {currentLine && (
          <Prompt>
            {currentLine}
            <Cursor />
          </Prompt>
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal; 