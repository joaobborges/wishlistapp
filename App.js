import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")}></Avatar>
        <Title>Welcome back,</Title>
        <Name>Maria</Name>
        <StatusBar style="auto" />
      </TitleBar>

      <Subtitle>Popular Games</Subtitle>
      <Card />
    </Container>
  );
}

const Subtitle = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 28px;
  margin-left: 20px;
  margin-top: 48px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b6bec3;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
