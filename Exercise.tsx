import { Text, TextInput, View } from "react-native";
import { questions } from "./__fixtures__/questions";
import { StyleSheet } from "react-native";

export default function Exercise() {
  const question = questions[0];

  return (
    <View style={S.container}>
      <Text>{question.content}</Text>
      <TextInput />
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  answerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
});
