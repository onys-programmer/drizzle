import { AnswerStatus, Question } from "../../constants/types";
import {
  Animated,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { useCallback, useRef, useState } from "react";
import SubmitButton from "../../components/atoms/SubmitButton";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import * as Haptics from "expo-haptics";
import { Keyboard } from "react-native";

interface Props {
  question: Question;
  onSubmit: (answer: string) => void;
}

export default function ExerciseScreen({ question, onSubmit }: Props) {
  const { content, answer } = question;

  const [answerInput, setAnswerInput] = useState("");

  const onChangeUpdateAnswerInput = (e: any) => {
    setAnswerInput(e.nativeEvent.text);
  };
  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    // makes the sequence loop
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(anim.current, {
          useNativeDriver: true,
          toValue: -2,
          duration: 50,
        }),
        // shift element to the right by 2 units
        Animated.timing(anim.current, {
          useNativeDriver: true,
          toValue: 2,
          duration: 50,
        }),
        // bring the element back to its original position
        Animated.timing(anim.current, {
          useNativeDriver: true,
          toValue: 0,
          duration: 50,
        }),
      ]),
      // loops the above animation config 2 times
      { iterations: 2 }
    ).start();
  }, []);

  const onSubmitAnswer = () => {
    if (answerInput === answer) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      showToast("correct");
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      shake();
      showToast("wrong");
    }
    onSubmit(answerInput);
  };

  const showToast = (answerStatus: AnswerStatus) => {
    const type = answerStatus === "correct" ? "success" : "error";
    const text1 = answerStatus === "correct" ? "정답입니다." : "오답입니다.";
    Toast.show({
      type,
      text1,
      position: "bottom",
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      accessible={false}
    >
      <View style={S.container}>
        <Text>{content}</Text>
        <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
          <View style={S.answerRow}>
            <TextInput
              style={S.input}
              placeholder="정답"
              onChange={(e) => onChangeUpdateAnswerInput(e)}
            />
            <SubmitButton onPress={onSubmitAnswer} title="제출" />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
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
