import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.8);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

const WaveContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '100px'};
  overflow: hidden;
  ${(props) => props.flip && 'transform: scaleY(-1);'}
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: ${(props) => props.height || '100px'};
  
  path {
    fill: ${(props) => props.color || props.theme.primary || 'rgba(148, 93, 214, 0.3)'};
    animation: ${waveAnimation} ${(props) => props.duration || '10s'} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform-origin: center;
    transform: translateZ(0);
  }
`;

const WaveDivider = ({ height = '100px', color, flip = false, duration = '10s' }) => {
  return (
    <WaveContainer height={height} flip={flip}>
      <WaveSvg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        height={height} 
        color={color}
        duration={duration}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-33.4C660.29,14.87,722.78,36.82,813.73,30.93C927.37,24.32,1039.9,5.74,1151.57,50.37V0Z" opacity=".5" />
      </WaveSvg>
    </WaveContainer>
  );
};

export default WaveDivider;
