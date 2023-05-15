import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.blueColor,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: theme.blueColor,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
