import React from 'react';
import { breakpoints, colors } from '../styles/config/const';
import styled from 'styled-components';
import ScrollIndicator from '../components/ScrollIndicator.component';

export default function Hero() {
  return (
    <Container>
      <Line>     
      <svg width="100%" height="100%" viewBox="0 0 1366 702" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1722.5 1C1643.17 81 1106.6 281.8 777 221C365 145 943 39 1053 97C1163 155 747 347 493 371C239 395 58.1156 499 -61.0001 663C-130 758 -228.333 647.833 -186.5 622C-156.5 603.474 -74 643.5 -116.5 656C-190.111 677.65 -374 628 -376 607.5" stroke="#D22020"/>
      </svg>
      </Line>
      <IntroMessage>i am front-end developer<span>_</span></IntroMessage>
      <Title> <em>NATHAN</em> <br/> STAMPFLI</Title>
      <ScrollIndicator/>
    </Container>
  )
}

const Container = styled.div`
  height: 75vh;
  margin-top: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Line = styled.div`
  z-index: -1;
  width: 100%;
  position: absolute;
  svg{
    max-width: 100%;  
  }
`;

const IntroMessage = styled.p`
  font-size: 16px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  span{
    color: ${colors.primaryColor}
  }
`;

const Title = styled.h1`
z-index: 2;
  margin-top: 50px;
  color: transparent;
  -webkit-text-stroke: .6px ${colors.neutralWhite};
  font-weight: bold;
  font-size: 60px;
  line-height: 81.69%;
  text-align: center;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 120px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 180px;
  }
  em{
    color: ${colors.neutralWhite};
  }
`;

