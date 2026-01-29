import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    &:hover {
        background: ${({ theme }) => theme.neonCyan};
        box-shadow: 0 0 20px ${({ theme }) => theme.shadowCyan};
    }
`

const Card = styled.div`
    width: 330px;
    height: 490px;
    background: ${({ theme }) => theme.cardGlass};
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.borderGlow};
    box-shadow: 
        0 0 20px ${({ theme }) => theme.shadowDark},
        0 0 30px ${({ theme }) => theme.shadow};
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: ${({ theme }) => theme.glassBlur};
    -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
    position: relative;
    animation: fadeInUp 0.6s ease-out backwards;
    animation-delay: calc(var(--index) * 0.1s);
    
    /* File browser header */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 25px;
        background: ${({ theme }) => theme.card};
        border-bottom: 1px solid ${({ theme }) => theme.primary};
    }
    
    /* File icon */
    &::after {
        content: "📁";
        position: absolute;
        top: 4px;
        left: 12px;
        font-size: 14px;
    }
    
    &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 
            0 0 30px ${({ theme }) => theme.shadow},
            0 0 50px ${({ theme }) => theme.shadowCyan},
            inset 0 0 30px rgba(0, 255, 255, 0.1);
        border-color: ${({ theme }) => theme.neonCyan};
    }
    
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.black};
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.borderLight};
    box-shadow: 
        0 0 16px rgba(0,0,0,0.5),
        inset 0 0 20px rgba(0, 255, 65, 0.05);
    object-fit: cover;
    transition: all 0.3s ease;
    margin-top: 20px;
    
    &:hover {
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.primary};
    padding: 4px 10px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.neonCyan};
        border-color: ${({ theme }) => theme.neonCyan};
        box-shadow: 0 0 15px ${({ theme }) => theme.shadowCyan};
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0 0 10px ${({ theme }) => theme.shadow};
    
    /* File name style */
    &::before {
        content: ">";
        margin-right: 8px;
        color: ${({ theme }) => theme.neonCyan};
    }
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.8;
    
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.text_white};
    opacity: 0.85;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.6;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
    border: 3px solid ${({ theme }) => theme.primary};
`

const ProjectCards = ({ project, setOpenModal, index }) => {
    return (
        <Card
            onClick={() => setOpenModal({ state: true, project: project })}
            style={{ '--index': index }}
        >
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} />
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards