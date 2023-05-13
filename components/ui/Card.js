import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: theme.yellowColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 9,
    alignItems: "center",
  },
});
