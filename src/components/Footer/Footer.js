import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles'

function Footer() {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href='tel:+91-8789760658'>
                        +91-8789760658
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email1</LinkTitle>
                    <LinkItem href='mailto:vishalkgupta9966@gmail.com'>
                        vishalkgupta9966@gmail.com
                    </LinkItem>
                </LinkColumn>
                <LinkColumn style={{ marginLeft : '50px' }}>
                    <LinkTitle>Email2</LinkTitle>
                    <LinkItem href='mailto:b122131@iiit-bh.ac.in'>
                        b122131@iiit-bh.ac.in
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating One Project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/NiketRauniyar30">
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons href="https://linkedin.com/in/vishal-rauniyar">
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/niket_rauniyar30">
                        <AiFillInstagram size='3rem' />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    )
}

export default Footer