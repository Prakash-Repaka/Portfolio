import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import _default from '../../themes/default';

export const Nav = styled.div`
    background: ${({ theme }) => theme.cardGlass};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: ${({ theme }) => theme.glassBlur};
    -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
    border-bottom: 2px solid ${({ theme }) => theme.borderGlow};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${({ theme }) => theme.shadow};
    transition: all 0.3s ease;
    
    /* Terminal scan line effect */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary};
        animation: scan-horizontal 3s linear infinite;
    }
    
    @keyframes scan-horizontal {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    padding: 8px 0;
    
    /* Animated underline */
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.gradientCyan};
        box-shadow: 0 0 10px ${({ theme }) => theme.neonCyan};
        transition: width 0.3s ease;
    }
    
    :hover {
      color: ${({ theme }) => theme.neonCyan};
      text-shadow: 0 0 10px ${({ theme }) => theme.neonCyan},
                   0 0 20px ${({ theme }) => theme.shadowCyan};
    }
    
    :hover::after {
        width: 100%;
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      
      &::after {
          width: 100%;
          background: ${({ theme }) => theme.primary};
      }
    }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px; /* Added gap for icon spacing */
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;


export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 2px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  background: transparent;
  
  &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.primary};
      transition: left 0.4s ease;
      z-index: -1;
  }
  
  :hover {
      color: ${({ theme }) => theme.black};
      border-color: ${({ theme }) => theme.neonCyan};
      box-shadow: 0 0 20px ${({ theme }) => theme.shadow},
                  0 0 30px ${({ theme }) => theme.shadowCyan};
  }
  
  :hover::before {
      left: 0;
  }
  
  @media screen and (max-width: 768px) { 
      font-size: 12px;
      padding: 0 16px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  gap: 16px; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light};
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;



export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;