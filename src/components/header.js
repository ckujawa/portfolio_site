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
            display: block;
            padding: 10px;
            margin: 0;
            text-decoration: none;
            font-size: 1.75em;
            color: #dd6556;
            background-color: #7b0e00
          }

          a:hover {
            font-weight: bold;
            color: #510900;
            background-color: #c63d2b;
            border: 2px outset #a07514;
            box-shadow: 5px 5px 10px #510900;
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
          <Link to="/work">Work</Link>
        </li>
      </nav>
    </HeaderContainer>
  </HeaderWrapper >

)

export default Header
