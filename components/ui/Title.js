import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: theme.blueColor,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: theme.blueColor,
    padding: 12,
  },
});
