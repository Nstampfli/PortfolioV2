import React from 'react';
import { breakpoints } from '../styles/config/const';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%,-50%);
  svg{
    width:450px;
    height: 450px;
    @media (min-width: ${breakpoints.tablet}) {
      width:750px;
    height: 750px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width:1150px;
    height: 1150px;
  }
  }
`;

export default function Blur() {
  return (
    <Container>
      <svg width="1144" height="1157" viewBox="0 0 1144 1157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <g opacity="0.3" filter="url(#filter0_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M264.449 628.731C236.582 568.037 256.152 497.273 280.309 435.122C304.632 372.545 341.268 311.987 400.864 277.76C459.308 244.195 530.289 249.863 598.284 252.504C667.163 255.181 741.922 251.42 795.576 293.096C849.266 334.8 863.478 405.471 878.633 470.269C893.195 532.53 902.384 596.728 880.695 657.035C858.524 718.682 810.279 765.678 757.626 806.735C699.225 852.274 636.367 919.58 562.773 904.937C488.059 890.071 475.084 790.49 420.09 739.574C372.409 695.428 291.194 686.985 264.449 628.731Z" fill="#D22020"/>
        </g>
        <g opacity="0.3" filter="url(#filter1_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M411.699 606.653C396.975 574.582 407.316 537.19 420.08 504.349C432.932 471.283 452.291 439.285 483.782 421.199C514.664 403.463 552.17 406.458 588.099 407.854C624.495 409.268 663.998 407.281 692.349 429.302C720.719 451.339 728.228 488.681 736.236 522.921C743.931 555.82 748.787 589.742 737.326 621.609C725.611 654.183 700.118 679.016 672.296 700.711C641.437 724.774 608.222 760.339 569.335 752.601C529.856 744.746 523 692.127 493.941 665.223C468.746 641.896 425.832 637.434 411.699 606.653Z" fill="#F2C94C"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_f" x="0.784546" y="0.419067" width="1142.79" height="1156.56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur"/>
        </filter>
        <filter id="filter1_f" x="154.479" y="156.752" width="839.652" height="846.929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur"/>
        </filter>
        </defs>
      </svg>
    </Container>
  );
}
