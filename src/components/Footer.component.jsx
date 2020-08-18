import React from 'react';
import { colors } from '../styles/config/const';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Next>WHAT’S NEXT?</Next>
      <ContactMe>contact me here to hire me or talk about a project</ContactMe>
      <Mail href="mailto:nathan.stampfli2001@gmail.com">nathan.stampfli2001@gmail.com</Mail>
      <Networks>
        <Network></Network>
        <Network></Network>
        <Network></Network>
      </Networks>
      <CopyRight>© Nathan STAMPFLI - 2020 all rights reserved</CopyRight>
      <Director>developed by me and designed by WOLFF Maëva</Director>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: #141414;
`;

const Next = styled.p`
  color: ${colors.darkGrey};
  margin-top: 40px;
  font-size :18px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
const ContactMe = styled.p`
  font-size: 24px;
  margin-top: 32px;
`;
const Mail = styled.a`
  cursor: pointer;
  color: ${colors.neutralWhite};
  text-decoration: underline;
  margin-top: 12px;
`;
const Networks = styled.div`
  margin-top: 32px;
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: space-between;
`;
const Network = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
`;
const CopyRight = styled.p`
color: ${colors.darkGrey};
margin-top: 40px;
`;
const Director = styled.p`
color: ${colors.darkGrey};
margin: 4px 0px 40px 0px;
`;