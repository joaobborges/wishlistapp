import React from "react";
import styled from "styled-components";

const Card = (props) => (
  <Container>
    <Cover>
      <Image source={require("../assets/game1.jpg")} />
      <Title>Destiny 2</Title>
    </Cover>
    <Content>
      <Caption>Bungie</Caption>
      <Subtitle>Feb 22, 2022</Subtitle>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  flex-direction: column;
  padding-left: 16px;
  padding-top: 16px;
`;

const Caption = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 4px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: gray;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 16px;
  margin-left: 16px;
  margin-top: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-left: 16px;
`;
