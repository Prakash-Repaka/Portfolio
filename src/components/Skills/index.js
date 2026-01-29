import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

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
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.cardGlass};
  border: 2px solid ${({ theme }) => theme.borderGlow};
  box-shadow: 
    0 0 20px ${({ theme }) => theme.shadowDark},
    0 0 30px ${({ theme }) => theme.shadow},
    inset 0 0 20px rgba(0, 255, 65, 0.05);
  border-radius: 4px;
  padding: 24px 36px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: calc(var(--index) * 0.1s);
  
  /* Terminal window header */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: ${({ theme }) => theme.card};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
  
  /* Terminal window dots */
  &::after {
    content: "● ● ●";
    position: absolute;
    top: 8px;
    left: 12px;
    font-size: 12px;
    color: ${({ theme }) => theme.primary};
    letter-spacing: 4px;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 0 30px ${({ theme }) => theme.shadow},
      0 0 50px ${({ theme }) => theme.shadowCyan},
      inset 0 0 30px rgba(0, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.neonCyan};
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 24px;
  }
  
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 18px 20px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.neonCyan};
  margin-bottom: 20px;
  margin-top: 30px;
  text-align: center;
  text-shadow: 0 0 10px ${({ theme }) => theme.neonCyan};
  
  /* Command prompt style */
  &::before {
    content: "$ ";
    color: ${({ theme }) => theme.primary};
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.borderLight};
  border-radius: 2px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  background: rgba(0, 20, 20, 0.3);
  position: relative;
  overflow: hidden;
  
  /* Hover scan effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.phosphorGlow}, transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    box-shadow: 
      0 0 15px ${({ theme }) => theme.shadow},
      inset 0 0 10px rgba(0, 255, 65, 0.2);
    transform: translateY(-2px);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 0 5px ${({ theme }) => theme.primary});
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index} style={{ '--index': index }}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage
                      src={item.image}
                      alt={item.name + " logo"}
                      width={32}
                      height={32}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/32?text=No+Logo"; }}
                    />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills