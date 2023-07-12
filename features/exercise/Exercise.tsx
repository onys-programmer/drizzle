import AnswerScreen from "./AnswerScreen";
import ExerciseScreen from "./ExerciseScreen";
import { questions } from "../../__fixtures__/questions";
import { useEffect, useState } from "react";
import { AnswerStatus, ExerciseStatus } from "../../constants/types";

export default function Exercise() {
  const [exerciseStatus, setExerciseStatus] =
    useState<ExerciseStatus>("inProgress");
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>(null);
  const [questionNum, setQuestionNum] = useState(0);

  const goToNextQuestion = () => {
    setExerciseStatus("completed");
  };

  const handleSubmit = (answer: string) => {
    if (answer === questions[questionNum].answer) {
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("wrong");
    }
    goToNextQuestion();
  };

  useEffect(() => {
    // show the answer for 3 seconds

    const showAnswerFor = (duration: number) => {
      setTimeout(() => {
        setExerciseStatus("inProgress");
        setQuestionNum((prev) => (prev + 1) % questions.length);
      }, duration);
    };

    if (exerciseStatus === "completed") {
      showAnswerFor(3000);
    }
  }, [exerciseStatus]);

  return (
    <>
      {exerciseStatus === "inProgress" ? (
        <ExerciseScreen
          question={questions[questionNum]}
          onSubmit={handleSubmit}
        />
      ) : (
        <AnswerScreen
          answerStatus={answerStatus}
          question={questions[questionNum]}
        />
      )}
    </>
  );
}
