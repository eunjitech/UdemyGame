import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import theme from "../colors";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
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
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: theme.blueColor,
    borderBottomWidth: 2,
    color: theme.blueColor,
    marginVertical: 10,
    fontWeight: "bold",
    width: 50,
    alignSelf: "center",
    textAlign: "center",
  },
});
