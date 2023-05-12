import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import theme from "./colors";
import image from "./assets/jjangoo.jpeg";

export default function App() {
  return (
    <LinearGradient
      style={styles.appContainer}
      colors={["#FFD662", "#00539C"]}
      // start={{ x: 0.1, y: -0.3 }}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        style={{ flex: 1 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.yellowColor,
  },
});
