import React from 'react';
import styled,{keyframes} from 'styled-components';
 import { breakpoints } from '../styles/config/const';

export default function ScrollIndicator() {
  return (
    <Container>
      <Text>scroll down</Text>
      <Arrow>
        <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3142 16.8347C17.6667 16.4941 17.6667 15.9273 17.3142 15.5748C16.9737 15.2342 16.4068 15.2342 16.067 15.5748L9.67849 21.9633L9.67849 0.882026C9.67769 0.3906 9.28709 -3.62434e-07 8.79567 -3.83915e-07C8.30424 -4.05396e-07 7.90094 0.3906 7.90094 0.882026L7.90094 21.9633L1.52431 15.5748C1.17182 15.2342 0.604177 15.2342 0.264386 15.5748C-0.0881069 15.9273 -0.0881069 16.4949 0.264386 16.8347L8.16531 24.7356C8.50589 25.0881 9.07274 25.0881 9.41253 24.7356L17.3142 16.8347Z" fill="#F7F7F7"/>
        </svg>
    </Arrow>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @media (min-width: ${breakpoints.tablet}) {
    right: 80px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  transform: rotate(-90deg);
`;

const ScrollAnimation = keyframes`
0% {
  transform: none;
}
100% {
  transform: translateY(10px);
}
`
const Arrow = styled.div`
  animation: ${ScrollAnimation} .55s ease-in alternate infinite;
  margin-top: 50px;
`;