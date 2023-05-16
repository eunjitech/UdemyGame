import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import theme from "../constants/colors";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogITem";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
  const [guessRounds, setGuessRounds] = React.useState([initialGuess]);

  React.useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "너는 잘못된 선택을 했다.", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    console.log(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((cur) => [newRndNumber, ...cur]);
  }

  React.useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <ScrollView contentContainerStyle={styles.guessContainer}>
        {guessRounds.map((item) => (
          <Text style={styles.guessItem} key={item}>
            {item}
          </Text>
        ))}
      </ScrollView> */}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
  },
  InstructionText: { marginBottom: 12 },
  buttonsContainer: { flexDirection: "row" },
  buttonContainer: { flex: 1 },
  listContainer: { flex: 1, padding: 16 },
  // guessContainer: { margin: 30, flexDirection: "row", flexWrap: "wrap" },
  // guessItem: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  //   fontFamily: "open-sans",
  //   fontSize: 30,
  //   color: theme.yellowColor,
  // },
});
