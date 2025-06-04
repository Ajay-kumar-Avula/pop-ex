import React from "react";
import styled from "styled-components";
import { MobileWrapper } from './MobileWrapper';
import { FaCamera } from "react-icons/fa";

const Wrapper = styled.div`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 812px;
  background: #F7F8F9 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Title = styled.h2
`top: 27px;
  left: 15px;
  width: 146px;
  height: 22px;
  text-align: left;
  font: normal normal normal 18px/21px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  text-transform: capitalize;
  opacity: 1;`

  const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;


const Avatar = styled.img`
  top: 98px;
  left: 20px;
  width: 76px;
  height: 76px;
  background: transparent url('img/Ellipse 114.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const CameraIcon = styled(FaCamera)`
 position: absolute;
  bottom: -15px;
  right: -15px;
  background: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 14px;
  color: #6c63ff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const Name = styled.p`
  top: 98px;
  left: 116px;
  width: 73px;
  height: 18px;
  text-align: left;
  font: normal normal medium 15px/19px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  text-transform: capitalize;
  opacity: 1;
`;

const Email = styled.p`
  top: 122px;
  left: 116px;
  width: 118px;
  height: 17px;
  text-align: left;
  font: normal normal normal 14px/19px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  text-transform: capitalize;
  opacity: 1;
`;

const Bio = styled.p`
  top: 204px;
  left: 20px;
  width: 337px;
  height: 63px;
  text-align: left;
  font: normal normal normal 14px/22px Rubik Regular;
  letter-spacing: 0px;
  color: #1D2226;
  text-transform: capitalize;
  opacity: 1;
`;

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) return <Wrapper><h2>User not logged in.</h2></Wrapper>;

return (
  <MobileWrapper>
  <Wrapper>
    <Title>Account Settings</Title>
  <ImageWrapper>
    <Avatar src="https://i.ibb.co/LdpQ9pgV/Ellipse-114-2x.png" alt="User Avatar" />
    <CameraIcon />
  </ImageWrapper>
    <Name>{user.name}</Name>
    <Email>{user.email}</Email>
    <Bio>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</Bio>
  </Wrapper>
  </MobileWrapper>
);
}
