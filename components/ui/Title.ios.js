import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import theme from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: theme.blueColor,
    textAlign: "center",
    borderColor: theme.blueColor,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
