import React from 'react';
import { breakpoints, colors } from '../styles/config/const';
import styled from 'styled-components';


export default function HomeProjects() {
  return (
    <TitleSection>
      works<span>_</span>
    </TitleSection>
  )
}

const TitleSection = styled.h3`
  margin-top: 80px;
  text-align: center;
  font-size: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
  span{
    color: ${colors.primaryColor}
  }
`;