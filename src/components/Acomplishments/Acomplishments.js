import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'
import { data } from '../../constants/contants'

function Acomplishments() {
    return (
        <Section>
            <SectionTitle>
                Personal Achievements
            </SectionTitle>
            <Boxes>
                {data.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>
                            {`${card.number}+`}
                        </BoxNum>
                        <BoxText>
                            {card.text}
                        </BoxText>
                    </Box>
                ))}
            </Boxes>
            <SectionDivider />
        </Section>
    )
}

export default Acomplishments