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
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import theme from "../constants/colors";
import bgImage from "../assets/gameOverBg.jpeg";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <Modal
      animationType="slide"
      supportedOrientations={["default"]}
      style={styles.screen}
    >
      <ImageBackground
        source={bgImage}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "cover",
        }}
        imageStyle={{ opacity: 0.5 }}
      >
        <ScrollView>
          <View style={{ flex: 1 }}>
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
                  <View style={[styles.imageBox, imageStyle]}>
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
                    <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                    to guess the number
                    <Text style={styles.highlight}>{userNumber}</Text>
                  </Text>
                </View>
              </View>
              <PrimaryButton title="Restart" onPress={onStartNewGame}>
                Start New Game
              </PrimaryButton>
            </SafeAreaView>
          </View>
        </ScrollView>
      </ImageBackground>
    </Modal>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  imageBox: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: theme.blueColor,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  highlight: { color: "red" },
});
