import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaGithub, FaSkype } from 'react-icons/fa'
import {SocialBlock} from './social'

const Foot = styled.footer`
    height: 50px;
    width: 100%;
    padding: 0;
    margin: 0;
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Footer = () => {
    return (<Foot>
        <SocialBlock>
            <a href='https://twitter.com/cmkfotoDsgn' title="@cmkfotoDsgn"><FaTwitter /></a>
            <a href='https://github.com/ckujawa' title="ckujawa on Github"><FaGithub /></a>
            <a href='skype:cmkujawa?chat' title='cmkujawa on Skype'><FaSkype /></a>
        </SocialBlock>
    </Foot>);
}