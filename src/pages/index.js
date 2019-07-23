import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from "../components/global"
import Header from "../components/header"
import background from '../imgs/background.jpg'
import {Footer} from '../components/footer'

const OuterWrapper = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 20px;

  h1{
    font-size: 3em;
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 800px){

    h1{
      font-size: 2em;
      padding-bottom: 10px;
    }
  }

`;

const IndexLayout = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,255, 0.4);
  }
`;

const ContentWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
  z-index: 5;
  position: absolute;
  right: 100px;
  top: calc(50% - 100px);

  img{
    margin: 0 10px;
    width: 25%;
    height: auto;
    border-radius: 50%;
  }
  div{
    margin: 0 10px;
    width: 80%;
    text-align: left;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin: 15px 0;
  }
`;

export default () => (
  <IndexLayout>
    <GlobalStyle/>
      <Header/>
      <ContentWrapper>
        <h1>Websites that Work for You!</h1>
        <div>
          <p>Hi! I am Chris and I am a web designer and full-stack developer from the state of New Hampshire.
          I have worked with numerous technologies my 10+ years as a software developer. I enjoy building everything from simple product landing pages
        to complex, scalable, interactive web applications.</p>
          <p>If you are the owner of a small business looking to either create or improve your web presence, let's talk.
        I would love the opportunity to see how I can be of service to you.</p>
        </div>
      </ContentWrapper>
      <Footer/>
  </IndexLayout>
) 
