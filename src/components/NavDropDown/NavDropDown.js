import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDownStyles'

function NavDropDown(props) {
    return (
        <DropDownContainer active={props.isOpen}>
            <DropDownItem href='#' target='_blank' rel='noreferrer'>
                <DropDownIcon>
                    <AiFillPhone />
                </DropDownIcon>
                <DropDownTextContainer>
                    <DropDownItemTitle>Phone</DropDownItemTitle>
                    <DropDownItemDesc>Let's Get Together and Have a Chat?</DropDownItemDesc>
                </DropDownTextContainer>
            </DropDownItem>
            <DropDownItem href='#' target='_blank' rel='noreferrer'>
                <DropDownIcon>
                    <AiOutlineMail />
                </DropDownIcon>
                <DropDownTextContainer>
                    <DropDownItemTitle>Email</DropDownItemTitle>
                    <DropDownItemDesc>If You Want To Talk, Just send A Message and I'll Get Back To You</DropDownItemDesc>
                </DropDownTextContainer>
            </DropDownItem>
            <DropDownItem href='#' target='_blank' rel='noreferrer'>
                <DropDownIcon>
                    <FaLocationArrow />
                </DropDownIcon>
                <DropDownTextContainer>
                    <DropDownItemTitle>Address</DropDownItemTitle>
                    <DropDownItemDesc>IIIT bhubaneswar, Gothapatna, Bhubaneswar, Odisha-751003</DropDownItemDesc>
                </DropDownTextContainer>
            </DropDownItem>
        </DropDownContainer>
    )
}

export default NavDropDown