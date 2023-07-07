import { Text, TextInput, View } from "react-native";
import { questions } from "../__fixtures__/questions";
import { StyleSheet } from "react-native";
import { useState } from "react";
import SubmitButton from "../components/atoms/SubmitButton";

export default function Exercise() {
  const { content, answer } = questions[0];

  const [answerInput, setAnswerInput] = useState("");

  const onChangeUpdateAnswerInput = (e: any) => {
    console.log(e.nativeEvent.text);
    setAnswerInput(e.nativeEvent.text);
  };

  const onSubmitAnswer = () => {
    if (answerInput === answer) {
      alert("정답입니다!");
    }
  };

  return (
    <View style={S.container}>
      <Text>{content}</Text>
      <View style={S.answerRow}>
        <TextInput
          style={S.input}
          keyboardType="default"
          placeholder="정답"
          onChange={(e) => onChangeUpdateAnswerInput(e)}
        />
        <SubmitButton onPress={onSubmitAnswer} title="제출" />
      </View>
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
    borderRadius: 8,
    borderColor: "#E2E2E2",
    padding: 10,
    flex: 1,
  },
  answerRow: {
    flexDirection: "row",
  },
});
