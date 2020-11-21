import React from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { above } from '../utilities/breakpoints'

const StyledBurgerMenu = styled.div`
  --menu-width: calc(0.6 * 100vw);
  overflow: hidden;

  nav {
    margin: 0;
    padding: 0;
    position: absolute;
    width: var(--menu-width);
    right: calc(var(--menu-width) * -1);
  }

  ul {
    list-style: none;
  }

  a {
    color: black;
  }

  .menu_toggle {
    font-size: 2em;
    line-height: 2em;
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
  }

  .menu_toggle:hover,
  .menu_toggle:focus {
    color: red;
  }

  .menu-item {
    margin: 0 10px;
    font-family: Arimo sans-serif;
    text-decoration: none;
    font-size: 1.5em;
    color: black;
  }

  ${above.med`

        .menu_toggle{
            top: -9999px;
            right: -9999px;
        }
        
        nav {
            ${props =>
              props.Bottom ? `bottom: ${props.Bottom};` : 'bottom: auto'}
            ${props => (props.Right ? `right: ${props.Right};` : 'right: auto')}
            ${props => (props.Top ? `top: ${props.Top};` : 'top: auto')}
            ${props => (props.Left ? `left: ${props.Left};` : 'left: auto')}
            width: auto;
        }

        ul {
            display: flex;
            width: auto;
            position: absolute;
            right: 10px;
            bottom: 5px;
        }

        .menu-item{
            color: white;

            :hover{
              position: relative;
              transition: all 0.02s ease-in-out;
              padding: 0;
              &:before,
              &:after{
                content: "";
                position: absolute;
                bottom:-10px;
                left: 0;
                right: 0;
                width: 50%;
                height: 3px;
                transition: all 0.02s ease-in-ou;
                transition-duration: 0.752;
                opacity: 0;
                background-color: #ef3c27;
              }
            }
        }
        
    `}
`

export default ({ children, Top, Right, Bottom, Left }) => (
  <StyledBurgerMenu Top={Top} Right={Right} Bottom={Bottom} Left={Left}>
    <a href="#main-menu" className="menu_toggle">
      <FaBars />
    </a>
    <nav id="main-menu">
      <a href="#main-menu-toggle" className="menu_close">
        <FaTimes />
      </a>

      {children}
    </nav>
  </StyledBurgerMenu>
)
