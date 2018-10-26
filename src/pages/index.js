import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"

import headshot from '../imgs/headshot2.jpg'

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

const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    margin: 0 10px;
    width: 25%;
    height: auto;
    border-radius: 50%;
  }
  div{
    margin: 0 10px;
    width: 65%;
    text-align: left;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`;

export default () => (
  <Layout>
    <OuterWrapper>
      <h1>Websites that Work for You!</h1>
      <ContentWrapper>
        <img src={headshot} alt="Chris Kujawa"></img>
        <div>
          <p>Hi! I am Chris and I am a web designer and full-stack developer from the state of New Hampshire.
          I have worked with numerous technologies my 10+ years as a software developer. I enjoy building everything from simple product landing pages
        to complex, scalable, interactive web applications.</p>
          <p>If you are the owner of a small business looking to either create or improve your web presence, let's talk.
        I would love the opportunity to see how I can be of service to you.</p>
        </div>
      </ContentWrapper>
    </OuterWrapper>
  </Layout>
) 
