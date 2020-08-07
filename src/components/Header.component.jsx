import React from 'react';
import { breakpoints } from '../styles/config/const';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <List>
        <li>works</li>
        <li>about</li>
      </List>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  position:fixed;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  top: 0px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 40px;
  }
`;
const List = styled.ul`
  display: flex;
  width: 150px;
  justify-content: space-around;
  margin-right: 5%;
  li{
    font-size: 16px;
    @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  }
`;
