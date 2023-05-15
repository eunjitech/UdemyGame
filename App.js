import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import theme from "./constants/colors";
import image from "./assets/jjangoo.jpeg";

export default function App() {
  const [userNumber, setUserNumber] = React.useState();
  const [gameIsOver, setGameIsOver] = React.useState(false);

  const [fontsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen userNumber={userNumber} setGameIsOver={setGameIsOver} />
    );
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  return (
    <LinearGradient style={styles.appContainer} colors={["#FFD662", "#00539C"]}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.yellowColor,
  },
  rootScreen: { flex: 1 },
});
