import React from "react";
import styled from "styled-components";

const Upcoming = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Wrapper>
        <Title>{props.title}</Title>
        <Release>Release Date: {props.release}</Release>
      </Wrapper>
    </Cover>
  </Container>
);

export default Upcoming;

const Container = styled.View`
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  flex-direction: row;
`;

const Wrapper = styled.View`
  margin-left: 16px;
  justify-content: center;
  height: 58px;
  margin-bottom: 16px;
`;

const Image = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  margin-top: 4px;
  border-radius: 8px;
`;
const Title = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-bottom: 4px;
`;
const Release = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 14px;
  color: #b6bec3;
  font-weight: 500;
`;
