import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: { color: theme.blueColor, fontSize: 24 },
});
