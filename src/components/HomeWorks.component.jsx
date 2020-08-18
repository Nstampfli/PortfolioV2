import React from 'react';
import { breakpoints, colors } from '../styles/config/const';
import styled from 'styled-components';
import works from '../data/works.json';


export default function HomeProjects() {
  return (
    <Container>
        <TitleSection>
          works<span>_</span>
        </TitleSection>
        {works.map((work, index) => {
        return (
          <ProjectContainer key={index}>
            <ProjectImage 
                src={require(`../assets/${work.image}`)}
                alt='ProjectImage' >
            </ProjectImage>
            <ProjectInfos>
              <Title>{work.name}</Title>
              <Info><span>/ </span>{work.infos}</Info>
              <Goal>{work.goal}</Goal>
            </ProjectInfos>
          </ProjectContainer>
        );
        })}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
const ProjectContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    width: 80%;
    &:nth-child(2n){
      flex-direction: row-reverse;
    }
  }
`;


const ProjectImage = styled.img`
  width : 75%;
  height: auto;
  max-width: 600px;
  transition: all ease-in-out .4s;
  @media (min-width: ${breakpoints.tablet}) {
    width: 55%;
  }
  &:hover{
    transform: scale(1.1);
  }
`;
const ProjectInfos = styled.div`
  display: flex;
  width: 90%;
  margin-top : 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
   @media (min-width: ${breakpoints.tablet}) {
    width: 45%;
    align-items: flex-start;
    margin: 0px 50px
    }
`;

const Title = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  line-height: 60px;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: .6px ${colors.neutralWhite};
  font-weight: 900;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 65px;
    line-height: 80px;
    text-align: initial;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 80px;
    line-height: 100px;
  }
`;

const Info = styled.p`
  margin-top: 17px;
  font-size: 18px;
  text-align: center;
  span{
    color: ${colors.primaryColor}
  }
`;
const Goal = styled.p`
  margin-top: 9px;
  font-size: 18px;
  color: ${colors.darkGrey}
`;