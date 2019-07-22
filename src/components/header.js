import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FaTwitter, FaGithub, FaSkype } from 'react-icons/fa';
import Navigator from './navigator';

import logo from '../imgs/logo.svg';

const HeaderWrapper = styled.div`
      background: #0F5263;
      height: 175px;
      margin-bottom: 1.5rem;

      h1{
        margin: 30px 0 0 0;
        img{
          height: 100px;
          margin-bottom: .5rem;
        }
      }
`;

const HeaderContainer = styled.div`
      position: relative;
      margin: 0 auto;
      max-width: 1280px;
      padding: 1.45rem 1.0875rem;
`;

const SocialBlock = styled.div`
    position: absolute;
    top:  10px;
    left: 30px;
    padding-right: 10px;
    font-size: 2rem;
    height: 2rem;
    overflow: hidden;
    margin-right: 5px;
    margin-bottom: 10px;

    a {
        text-decoration: none;
        background-color: #ddb456;
        color: #a07514;
        margin: 0;
        padding: .2rem;
    }

    a:hover{
      background-color: #a07514;
      color: #ddb456;
    }

`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Chris Kujawa Web Development logo" />
        </Link>
      </h1>
      <SocialBlock>
        <a href='https://twitter.com/cmkfotoDsgn' title="@cmkfotoDsgn"><FaTwitter /></a>
        <a href='https://github.com/ckujawa' title="ckujawa on Github"><FaGithub /></a>
        <a href='skype:cmkujawa?chat' title='cmkujawa on Skype'><FaSkype /></a>
      </SocialBlock>
      <Navigator isOpen={false}></Navigator>
      {/* <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </nav> */}
    </HeaderContainer>
  </HeaderWrapper >

)

export default Header
