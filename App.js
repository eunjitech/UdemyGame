import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import theme from "./constants/colors";
import image from "./assets/jjangoo.jpeg";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = React.useState();
  const [gameIsOver, setGameIsOver] = React.useState(false);
  const [guessRounds, setGuessRounds] = React.useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  React.useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
        roundsNumber={guessRounds}
      />
    );
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  return (
    <LinearGradient style={styles.appContainer} colors={["#FFD662", "#00539C"]}>
      <StatusBar style="dark" />
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
