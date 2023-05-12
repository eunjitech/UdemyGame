import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../colors";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* <Text>GUESS</Text> */}
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>{/* <Text> LOG ROUNDS</Text> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
