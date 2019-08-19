import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Navigator from './navigator';

import logo from '../imgs/logo.svg';

const HeaderWrapper = styled.header`
      background: black;
      height: 100px;
      margin-bottom: 1.5rem;
      position: relative;

      h1{
          position: absolute;
          top: 15px;
          left: 30px;

        img{
          height: 75px;
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
        <ul>
          <li><a href="/" className="menu-item" id="home">Home</a></li>
          <li><a href="/blog" className="menu-item" id="blog">Blog</a></li>
          <li><a href="/work" className="menu-item" id="work">Work</a></li>
          <li><a href="/contact" className="menu-item" id="contact">Contact</a></li>
        </ul>
      </Navigator>
  </HeaderWrapper >

)

export default Header
