import React from "react";
import Menu from 'react-burger-menu/lib/menus/slide';
import styled from 'styled-components';

const StyledBurgerMenu = styled.div`
    .bm-item {
        text-align:center;  
        display: inline-block;
        text-decoration: none;
        margin-bottom: 5vh;
        color: #d1d1d1;
        transition: color 0.2s;
    }
    .bm-item:hover {
        color: white;
    }
    .bm-burger-button {
        position: fixed;
        width: 45px;
        height: 25px;
        right: 20px;
        top:   10px;
    }
    .bm-burger-bars {
        color: #a07514;
        background: #a07514;;
    }
    .bm-cross-button {
        height: 40px;
        width: 20px;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-menu {
        position: relative;
        background: rgba(0, 0, 0, 0.3);
        padding: 2.5em 1.5em 0;
        font-size: 2em;
    }
    .bm-morph-shape {
        fill: #373a47;
    }
    .bm-item-list {
        position: static;
        color: #b8b7ad;
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`;

export default () => (
    <StyledBurgerMenu>
        <Menu right>
            <a href="/" className="menu-item" id="home">Home</a>
            <a href="/blog" className="menu-item" id="blog">Blog</a>
            <a href="/work" className="menu-item" id="work">Work</a>
        </Menu>
    </StyledBurgerMenu>
)