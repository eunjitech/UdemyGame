import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  SafeAreaView,
  Button,
} from "react-native";
import theme from "../constants/colors";
import bgImage from "../assets/gameOverBg.jpeg";

export default function GameOverScreen({ userNumber, setGameIsOver }) {
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
              <View>
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
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingVertical: 10,
                    color: theme.blueColor,
                  }}
                >
                  The number is {userNumber}
                </Text>
              </View>
              <Button title="Restart" onPress={() => setGameIsOver(false)} />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
