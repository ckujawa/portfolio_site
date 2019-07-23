import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Navigator from './navigator';

import logo from '../imgs/logo.svg';

const HeaderWrapper = styled.header`
      background: #0F5263;
      height: 100px;
      margin-bottom: 1.5rem;
      position: relative;

      h1{
        
        img{
          height: 75px;
          margin-bottom: .5rem;
        }
      }
`;

const HeaderContainer = styled.div`
      margin: 0 auto;
      max-width: 1280px;
      padding: 1.45rem 1.0875rem;
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
      <Navigator Bottom="15px" Right="10px"> 
        <a href="/" className="menu-item" id="home">Home</a>
        <a href="/blog" className="menu-item" id="blog">Blog</a>
        <a href="/work" className="menu-item" id="work">Work</a>
        <a href="/contact" className="menu-item" id="contact">Contact</a>
      </Navigator>
    </HeaderContainer>
  </HeaderWrapper >

)

export default Header
