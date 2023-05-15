import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import theme from "../constants/colors";
import bgImage from "../assets/gameOverBg.jpeg";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide">
        <ImageBackground
          source={bgImage}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView
            style={{
              // flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingVertical: 10,
                  }}
                >
                  Game Over!
                </Text>
                <View style={styles.imageBox}>
                  <Image
                    style={styles.image}
                    source={require("../assets/maeg.jpeg")}
                  />
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    fontSize: 40,
                    paddingVertical: 10,
                    color: theme.blueColor,
                  }}
                >
                  The number is {userNumber}
                </Text>
                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    marginBottom: 24,
                  }}
                >
                  Your phone needed{" "}
                  <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                  guess the number
                  <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
              </View>
            </View>
            <PrimaryButton title="Restart" onPress={onStartNewGame}>
              Start New Game
            </PrimaryButton>
          </SafeAreaView>
        </ImageBackground>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    borderRadius: 200,
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: theme.blueColor,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  highlight: { color: "red" },
});
