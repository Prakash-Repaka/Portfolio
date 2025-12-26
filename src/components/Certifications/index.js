import React from 'react'
import styled from 'styled-components'
import { certifications } from '../../data/constants'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 20px 0 60px 0;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    gap: 12px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`

const HeaderIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: ${({ theme }) => theme.primary + '15'};
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary + '40'};
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 28px;
    }
`

const Desc = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
`

const Card = styled.a`
    width: 380px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 0 10px ${({ theme }) => theme.shadowDark};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    backdrop-filter: blur(10px);
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
        border-color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 380px;
    }
`

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const IconBox = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary + '15'};
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.primary + '50'};
`

const ExternalLink = styled.div`
    color: ${({ theme }) => theme.text_secondary};
    font-size: 18px;
    transition: color 0.2s ease;
    ${Card}:hover & {
        color: ${({ theme }) => theme.primary};
    }
`

const CardTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.4;
`

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
`

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};
`

const Issuer = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`

const Certifications = () => {
    return (
        <Container id="certifications">
            <Wrapper>
                <Header>
                    <HeaderIcon>
                        <FaCertificate />
                    </HeaderIcon>
                    <HeaderContent>
                        <Title>Certifications</Title>
                        <Desc>Professional Credentials</Desc>
                    </HeaderContent>
                </Header>

                <CardContainer>
                    {certifications.map((cert) => (
                        <Card key={cert.id} href={cert.link} target="_blank">
                            <CardTop>
                                <IconBox>
                                    <FaCertificate />
                                </IconBox>
                                <ExternalLink>
                                    <FaExternalLinkAlt />
                                </ExternalLink>
                            </CardTop>
                            <CardTitle>{cert.title}</CardTitle>
                            <CardFooter>
                                <Dot />
                                <Issuer>{cert.issuer}</Issuer>
                            </CardFooter>
                        </Card>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Certifications
