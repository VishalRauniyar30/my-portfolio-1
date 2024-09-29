import React from 'react'
import { DiFirebase, DiReact, DiPython, DiTechcrunch } from 'react-icons/di'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

function Technologies() {
    return (
        <Section id='tech'>
            <SectionDivider divider/>
            <SectionTitle>
                Technologies
            </SectionTitle>
            <SectionText>
                I have worked with a range of technologies 
                in the software and web development world.
                From Various Programming Languages, Front-end, 
                Back-end To Design.
            </SectionText>
            <List>
                <ListItem>
                    <picture>
                        <DiPython size='3rem' />
                    </picture>
                    <ListContainer>
                        <ListTitle>
                            Programming Languages
                        </ListTitle>
                        <ListParagraph>
                            Experience with <br />
                            C, C++, Python, JS, <br/>
                            Embedded JS
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture>
                        <DiReact size='3rem' />
                    </picture>
                    <ListContainer>
                        <ListTitle>
                            Front-End
                        </ListTitle>
                        <ListParagraph>
                            Experience with <br />
                            Html5, CSS, JS,<br/> 
                            React.js, Tailwind CSS
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture>
                        <DiFirebase size='3rem' />
                    </picture>
                    <ListContainer>
                        <ListTitle>
                            Back-End
                        </ListTitle>
                        <ListParagraph>
                            Experience with <br />
                            Node.js, Express.js,<br/>
                            Mongoose
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <picture>
                        <DiTechcrunch size='3rem' />
                    </picture>
                    <ListContainer>
                        <ListTitle>
                            Tools and Technologies
                        </ListTitle>
                        <ListParagraph>
                            Experience with <br />
                            Git, Github, MongoDB,<br/>
                            VS Code
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            </List>
            <SectionDivider colorAlt />
        </Section>
    )
}
    

export default Technologies