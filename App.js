import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import theme from "./colors";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.blueColor,
  },
});
