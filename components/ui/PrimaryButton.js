import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import theme from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: theme.lightBlueColor }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: theme.blueColor,
  },
  buttonText: {
    color: theme.whiteColor,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
