import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../components/global'
import Header from '../components/header'
import background from '../imgs/background.jpg'
import { Footer } from '../components/footer'

const IndexLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const ContentWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  height: 400px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  z-index: 5;
  position: absolute;
  right: 100px;
  top: calc(50% - 100px);

  img {
    margin: 0 10px;
    width: 25%;
    height: auto;
    border-radius: 50%;
  }
  div {
    margin: 0;
    width: 90%;
    text-align: left;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin: 15px 0;
  }
`

const Spacer = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 150px);
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 255, 0.4);
  }
`

export default () => (
  <IndexLayout>
    <GlobalStyle />
    <Header />
    <Spacer>
      <ContentWrapper>
        <h1>Websites that Work for You!</h1>
        <div>
          <p>
            Hi! I am Chris and I am a web designer and full-stack developer from
            the state of New Hampshire. I have worked with numerous technologies
            my 10+ years as a software developer. I enjoy building everything
            from simple product landing pages to complex, scalable, interactive
            web applications.
          </p>
          <p>
            If you are the owner of a small business looking to either create or
            improve your web presence, let's talk. I would love the opportunity
            to see how I can be of service to you.
          </p>
        </div>
      </ContentWrapper>
    </Spacer>
    <Footer />
  </IndexLayout>
)
