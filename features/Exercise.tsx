import { Text, TextInput, View } from "react-native";
import { questions } from "../__fixtures__/questions";
import { StyleSheet } from "react-native";

export default function Exercise() {
  const question = questions[0];

  return (
    <View style={S.container}>
      <Text>{question.content}</Text>
      <TextInput style={S.input} keyboardType="default" placeholder="정답" />
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 40,
    paddingTop: 0,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});
