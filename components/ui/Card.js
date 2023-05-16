import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
