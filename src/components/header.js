import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../imgs/logo.svg';

const HeaderWrapper = styled.div`
      background: #0F5263;
      height: 175px;
      margin-bottom: 1.5rem;

      h1{
        margin: 1rem 0 0 0;
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
      nav {
        position: absolute;
        bottom: 10px;
        right: 10px;
        
        li{
          display: inline-block;
          padding: 10px;
          margin-left: 1px;
          margin-right: 1px;

          a {
            text-decoration: none;
            font-size: 1.75em;
            color: #dd6556;
          }
        }
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
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
    </HeaderContainer>
  </HeaderWrapper >

)

export default Header
