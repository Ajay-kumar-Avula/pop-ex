import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobileWrapper } from './MobileWrapper';

const Container = styled.div`
    top: 0px;
    left: 0px;
    width: 375px;
    height: 812px;
    background: #F7F8F9 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    
`;

const Title = styled.h1`

  text-align: left;
  font: normal normal medium 18px/17px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 1;
`;

const Subtitle = styled.p`
  top: 592px;
  left: 20px;
  width: 232px;
  height: 48px;
  text-align: left;
  font: normal normal normal 18px/26px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 0.6;

`;

const Button = styled(Link)`
  display: block;
  margin: 1rem auto;
  padding: 1rem 2rem;
  width: 250px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.primary ? "#6C25FF" : "#6C25FF4B")};
  color: ${(props) => (props.primary ? "#FFFFFF" : "#7C3AED")};
  border: 2px solid #7C3AED;
  text-decoration: none;
  text-align: center;
`;

export default function Landing() {
  return (
    <MobileWrapper>
      
    <Container>
      <Title>Welcome to PopX</Title>
      <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
      <Button to="/signup" primary>Create Account</Button>
      <Button to="/login">Already Registered? Login</Button>
    </Container>
    </MobileWrapper>
  );
}
