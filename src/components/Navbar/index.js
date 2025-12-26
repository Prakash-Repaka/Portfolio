import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaUser, FaMicrochip, FaBriefcase, FaLaptopCode, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">
            <FaUser style={{ marginRight: '8px' }} /> About
          </NavLink>
          <NavLink href='#skills'>
            <FaMicrochip style={{ marginRight: '8px' }} /> Skills
          </NavLink>
          <NavLink href='#experience'>
            <FaBriefcase style={{ marginRight: '8px' }} /> Experience
          </NavLink>
          <NavLink href='#projects'>
            <FaLaptopCode style={{ marginRight: '8px' }} /> Projects
          </NavLink>
          <NavLink href='#certifications'>
            <FaCertificate style={{ marginRight: '8px' }} /> Certifications
          </NavLink>
          <NavLink href='#education'>
            <FaGraduationCap style={{ marginRight: '8px' }} /> Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <GitHubButton href={Bio.linkedin} target="_blank">LinkedIn Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaUser style={{ marginRight: '8px' }} /> About
            </MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaMicrochip style={{ marginRight: '8px' }} /> Skills
            </MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaBriefcase style={{ marginRight: '8px' }} /> Experience
            </MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaLaptopCode style={{ marginRight: '8px' }} /> Projects
            </MobileLink>
            <MobileLink href='#certifications' onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaCertificate style={{ marginRight: '8px' }} /> Certifications
            </MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <FaGraduationCap style={{ marginRight: '8px' }} /> Education
            </MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.linkedin} target="_blank">LinkedIn Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar