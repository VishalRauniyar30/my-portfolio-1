import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'

function Header() {
    return (
        <Container>
            <Div1>
                <Link href='/' legacyBehavior passHref>
                    <a style={{ display : 'flex', alignItems : 'center', color : 'white', marginBottom: '20px', marginTop: '-7px' }}>
                        <DiCssdeck  size='3em' />
                        <Span>Portfolio</Span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href='#projects'>
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#tech'>
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#about'>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <SocialIcons href="https://github.com/NiketRauniyar30">
                    <AiFillGithub size='3rem' />
                </SocialIcons>
                <SocialIcons href="https://linkedin.com/in/vishal-rauniyar">
                    <AiFillLinkedin size='3rem' />
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/niket_rauniyar30">
                    <AiFillInstagram size='3rem' />
                </SocialIcons>
            </Div3>
        </Container>
    )
}

export default Header