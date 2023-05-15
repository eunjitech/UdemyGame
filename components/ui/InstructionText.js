import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: { color: theme.blueColor, fontSize: 24 },
});
