import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: transparent; /* Removed gradient to show Matrix background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%); Removed clip-path to avoid cutting off matrix rain if applies */
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 
    0 0 10px ${({ theme }) => theme.primary},
    0 0 20px ${({ theme }) => theme.shadow};
  animation: glow-pulse 3s ease-in-out infinite;
  
  /* Terminal prompt style */
  &::before {
    content: "> ";
    color: ${({ theme }) => theme.neonCyan};
  }
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_white};
  opacity: 0.9;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 2px;
  font-weight: 600;
  margin: 22px 0px;
  background: ${({ theme }) => theme.cardGlass};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
  }
`

export const ToggleButton = styled.div`
  padding: 12px 24px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${({ active, theme }) =>
        active && `
      background: ${theme.primary};
      color: ${theme.black};
      box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.3);
    `
    }
  
  &:hover {
    background: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.neonCyan};
    text-shadow: 0 0 10px ${({ theme }) => theme.neonCyan};
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 11px;
  }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
