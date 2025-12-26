import styled from "styled-components";

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px 80px;
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 100px 16px 60px;
    min-height: auto;
  }
  
  @media (max-width: 640px) {
    padding: 80px 16px 40px;
  }
  
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%  ;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 20px ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px ${({ theme }) => theme.primary}, 0 0 10px ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 8px;
  
  /* Text shadow for glow effect */
  text-shadow: 2px 2px 0px ${({ theme }) => theme.primary};
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
  
  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    font-size: 24px;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 700;
  text-shadow: 0 0 10px ${({ theme }) => theme.primary};
  
  /* Typewriter cursor effect */
  .Typewriter__cursor {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  font-weight: 400;

  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: fit-content;
  max-width: 300px;
  text-align: center;
  padding: 16px 48px;
  color: ${({ theme }) => theme.primary};
  border-radius: 4px; /* Less rounded */
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
    box-shadow: 0 0 30px ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translateY(-1px);
  }
    
  @media (max-width: 960px) {
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    padding: 14px 36px;
    font-size: 16px;
  } 
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }

  &::after {
    content: '↓';
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 640px) {
    bottom: 20px;
    font-size: 12px;
  }
`;

