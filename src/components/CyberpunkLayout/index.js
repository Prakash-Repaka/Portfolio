import React from 'react';
import styled from 'styled-components';
import '../../themes/cyberpunkBackground.css';
import ConstellationParticles from '../ConstellationParticles';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: ${({ theme }) => theme.text1};
`;

const Cube = styled.div`
  position: absolute;
  background: rgba(100, 150, 200, 0.3);
  border: 1px solid rgba(100, 150, 200, 0.5);
  box-shadow: 0 0 10px rgba(100, 150, 200, 0.4);
  border-radius: 4px;
  animation: floatUpDown 6s ease-in-out infinite;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: rgba(100, 150, 200, 0.6);
    box-shadow: 0 0 20px rgba(100, 150, 200, 0.8);
  }
`;

const Cube1 = styled(Cube)`
  width: 40px;
  height: 40px;
  top: 20%;
  left: 15%;
  animation-delay: 0s;
`;

const Cube2 = styled(Cube)`
  width: 60px;
  height: 60px;
  top: 50%;
  left: 60%;
  animation-delay: 2s;
  animation-name: floatLeftRight;
`;

const Cube3 = styled(Cube)`
  width: 30px;
  height: 30px;
  top: 70%;
  left: 80%;
  animation-delay: 4s;
`;

const Letter = styled.div`
  position: absolute;
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  color: rgba(150, 200, 250, 0.3);
  user-select: none;
  animation: floatUpDown 8s ease-in-out infinite;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  &:hover {
    color: rgba(150, 200, 250, 0.7);
    text-shadow: 0 0 10px rgba(150, 200, 250, 0.8);
  }
`;

const Letter1 = styled(Letter)`
  top: 30%;
  left: 40%;
  animation-delay: 1s;
`;

const Letter2 = styled(Letter)`
  top: 60%;
  left: 70%;
  animation-delay: 3s;
`;

const Letter3 = styled(Letter)`
  top: 80%;
  left: 25%;
  animation-delay: 5s;
`;

const CyberpunkLayout = ({ children }) => {
  return (
    <>
      <Background className="cyberpunk-background" />
      <ConstellationParticles />
      <Cube1 className="cube" />
      <Cube2 className="cube" />
      <Cube3 className="cube" />
      <Letter1 className="letter">C</Letter1>
      <Letter2 className="letter">P</Letter2>
      <Letter3 className="letter">N</Letter3>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default CyberpunkLayout;
