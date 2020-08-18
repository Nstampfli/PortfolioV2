import React from 'react';
import { breakpoints, colors } from '../styles/config/const';
import styled from 'styled-components';

export default function HomeAbout() {
  return (
    <Container>
        <TitleSection>
          aboutme<span>_</span>
        </TitleSection>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleSection = styled.h3`
  margin-top: 80px;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
  span{
    color: ${colors.primaryColor}
  }
`;