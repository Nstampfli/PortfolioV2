import React from 'react';
import { breakpoints, colors } from '../styles/config/const';
import styled from 'styled-components';

export default function HomeAbout() {
  return (
    <Container>
        <TitleSection>
          aboutme<span>_</span>
        </TitleSection>
        <Infos>
          <Description>
          Hey ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vel pharetra, placerat
          arcu congue scelerisque lorem interdum. Urna amet, sagittis cras egestas. Mauris semper vitae
            consectetur viverra nisl viverra consectetur luctus interdum. Volutpat purus elementum auctor 
            odio ac mauris pellentesque faucibus.Urna amet, sagittis cras egestas. Mauris semper vitae consectetur
            viverra nisl viverra consectetur luctus interdum. Volutpat purus elementum auctor odio ac mauris 
            pellentesque faucibus.
          </Description>
          <Stacks>
            <Stack>VueJS • ReactJS • Git • JavaScript • HTML • Beers • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python •• VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python •</Stack>
            <Stack>VueJS • ReactJS • Git • JavaScript • HTML • Beers • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python •• VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • VueJS • ReactJS • Git • JavaScript • HTML • SCSS • Python • </Stack>
          </Stacks>
        </Infos>
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
const Infos = styled.div`
  margin-top: 40px;
  width: 90%;
  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }
`;
const Description = styled.p`
  line-height: 36px;
  width: 100%;
  font-size: 18px;
  text-align: center;
`;
const Stacks = styled.div`
  margin: 120px 0px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width:100%;
`;
const Stack = styled.p`
  transform: translateX(-50%);
  align-items: center;
  white-space: nowrap;
  line-height: 36px;
  font-size: 18px;
`;