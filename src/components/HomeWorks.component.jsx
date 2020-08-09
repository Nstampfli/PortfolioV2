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
          <ProjectContainer
          key={index}
          >
            <ProjectImage>
              <ImageBand  style={{ backgroundImage: `url(${require(`../assets/${work.image}`)})`}} ></ImageBand>
              <ImageBand  style={{ backgroundImage: `url(${require(`../assets/${work.image}`)})`}} ></ImageBand>
              <ImageBand  style={{ backgroundImage: `url(${require(`../assets/${work.image}`)})`}} ></ImageBand>
              <ImageBand  style={{ backgroundImage: `url(${require(`../assets/${work.image}`)})`}} ></ImageBand>
              <ImageBand  style={{ backgroundImage: `url(${require(`../assets/${work.image}`)})`}} ></ImageBand>
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
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImageBand = styled.div`
  width: 50px;
  height: 300px;
  background: no-repeat 0 0 fixed;
  margin: 5px;
  display: inline-block;
  transition: all ease-in-out .4s;
  &:hover{
    transform: scale(1.1)
  }
    @media (min-width: ${breakpoints.tablet}) {
      width: 75px;
      height: 375px;
      margin: 8px;
    }
    @media (min-width: ${breakpoints.laptop}) {
      width: 100px;
      height: 450px;
      margin: 10px;
    }
  &:nth-child(1),:nth-last-child(1){
    height: 200px;
    @media (min-width: ${breakpoints.tablet}) {
      height: 275px;
    }
    @media (min-width: ${breakpoints.laptop}) {
      height: 350px;
    }
  }
  &:nth-child(even){
    height: 250px;
    @media (min-width: ${breakpoints.tablet}) {
    height: 325px;
    }
    @media (min-width: ${breakpoints.laptop}) {
      height: 400px;
    }
  }
`;
const ProjectInfos = styled.div`
  display: flex;
  margin-top : 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
   @media (min-width: ${breakpoints.tablet}) {
     max-width: 45%;
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
  span{
    color: ${colors.primaryColor}
  }
`;
const Goal = styled.p`
  margin-top: 9px;
  font-size: 18px;
  color: ${colors.darkGrey}
`;