import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Upcoming from "./components/Upcoming";
import Logo from "./components/Logo";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")}></Avatar>
            <Title>Welcome back,</Title>
            <Name>Maria</Name>
            <Ionicons
              name="notifications"
              size={24}
              color="black"
              style={{ position: "absolute", right: 24, top: 8 }}
            />
            <StatusBar style="auto" />
          </TitleBar>

          <Subtitle>Trending Games</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 24 }}
            showsHorizontalScrollIndicator={false}
          >
            {popular.map((popular, index) => (
              <Card
                key={index}
                image={popular.image}
                title={popular.title}
                caption={popular.caption}
                subtitle={popular.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Genres</Subtitle>
          <ScrollView
            style={{ flexDirection: "row", padding: 24, paddingLeft: 12 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {genres.map((genres, index) => (
              <Logo key={index} image={genres.image} text={genres.text} />
            ))}
          </ScrollView>
          <Subtitle>Releasing Soon</Subtitle>
          <ScrollView
            style={{
              flexDirection: "column",
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            {upcoming.map((upcoming, index) => (
              <Upcoming
                key={index}
                image={upcoming.image}
                title={upcoming.title}
                release={upcoming.release}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  /* Section header */
  font-family: "Inter_900Black";
  color: black;
  font-weight: 600;
  font-size: 28px;
  margin-left: 20px;
  margin-top: 40px;
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
  font-family: "Inter_700Bold";
  font-size: 16px;
  color: #b6bec3;
  font-weight: 500;
`;

const Name = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const popular = [
  {
    image: require("./assets/game1.jpg"),
    title: "Destiny",
    caption: "Bungie",
    subtitle: "Rpg, FPS, Shooter, MMO",
  },
  {
    image: require("./assets/game2.jpg"),
    title: "Elden Ring",
    caption: "From Software",
    subtitle: "RPG",
  },
  {
    image: require("./assets/game3.jpg"),
    title: "Overwatch",
    caption: "Activision Blizzard",
    subtitle: "FPS, Shooter",
  },
];

const genres = [
  {
    image: require("./assets/favicon.png"),
    text: "Sandbox",
  },
  {
    image: require("./assets/favicon.png"),
    text: "Real-time strategy",
  },
  {
    image: require("./assets/favicon.png"),
    text: "Shooters",
  },
  {
    image: require("./assets/favicon.png"),
    text: "Role-playing",
  },
];

const upcoming = [
  {
    image: require("./assets/game1.jpg"),
    title: "Lego Star Wars: The Skywalker...",
    release: "21 / 07 / 1985",
  },
  {
    image: require("./assets/game1.jpg"),
    title: "MLB The Show 22",
    release: "21 / 07 / 1985",
  },
  {
    image: require("./assets/game1.jpg"),
    title: "Tiny Tina's Wonderlands",
    release: "21 / 07 / 1985",
  },
  {
    image: require("./assets/game1.jpg"),
    title: "Ghostwire: Tokyo",
    release: "21 / 07 / 1985",
  },
  {
    image: require("./assets/game1.jpg"),
    title: "Rune Factory 5",
    release: "21 / 07 / 1985",
  },
];
