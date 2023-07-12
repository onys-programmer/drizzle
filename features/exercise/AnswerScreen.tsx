import { View, Text, StyleSheet } from "react-native";
import { AnswerStatus, Question } from "../../constants/types";

interface Props {
  answerStatus: AnswerStatus;
  question: Question;
}
export default function AnswerScreen({ answerStatus, question }: Props) {
  const { fullContent, answer } = question;

  // Split the content by the answer, ignoring case
  const parts = fullContent.split(new RegExp(`(${answer})`, "gi"));

  const answerStyle =
    answerStatus === "correct" ? S.answerCorrect : S.answerWrong;

  return (
    <View style={S.container}>
      <Text>
        {parts.map((part, index) => {
          // Apply a style to the answer
          if (part.toLowerCase() === answer.toLowerCase()) {
            return (
              <Text key={index} style={answerStyle}>
                {part}
              </Text>
            );
          } else {
            return part;
          }
        })}
      </Text>
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
  answerCorrect: {
    color: "blue",
    fontWeight: "bold",
  },
  answerWrong: {
    color: "red",
    fontWeight: "bold",
  },
});
