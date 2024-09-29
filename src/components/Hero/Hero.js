import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

function Hero(props) {
    return (
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Porfolio
                </SectionTitle>
                <SectionText>
                I am a Skilled and Passionate Programmer and Developer with expertise 
                in the MERN Stack, with Good Programming Skills in C,C++, Python and 
                JavaScript and Proficient in Frontend and Backend Development. I have 
                Strong Problem solving Skills, collaborative Team Spirit,and Pay Close 
                Attention to Detail. I have strong Interest in Technology and can produce 
                excellent work. I am passionate about building efficient ,scalable web 
                applications.I am eager to contribute to a dynamic organization and 
                committed to continuous learning.
                </SectionText>
                <Button onClick={props.handleClick} >Learn More</Button>
            </LeftSection>
        </Section>
    )
}

export default Hero