export type importancePoint = number;

export type importanceDegree = 1 | 2 | 3 | 4 | 5;

type CategoryType = "basic" | "specifics";

type CategoryName =
  | "curriculum"
  | "contentStructure"
  | "achievementStandard"
  | "instructionModel";

export type SubjectName =
  | "general"
  | "korean"
  | "mathematics"
  | "socialStudies"
  | "science"
  | "english"
  | "music"
  | "art"
  | "physicalEducation"
  | "ethics"
  | "practicalArts";

export type SubjectImportance = {
  SubjectName: {
    CategoryName: number;
  };
};

export type Subject = {
  id: string;
  name: SubjectName;
  importance: importanceDegree;
};

export type Category = {
  id: string;
  type: CategoryType;
  subject: Subject;
  name: CategoryName;
};

export type Question = {
  id: string;
  description: string;
  fullContent: string;
  content: string;
  answer: string;
  importance: importanceDegree;
  subject: SubjectName;
};

export type ExerciseStatus = "inProgress" | "completed";

export type AnswerStatus = "correct" | "wrong" | null;

export const subjectNameKorean: Record<SubjectName, string> = {
  general: "총론",
  korean: "국어",
  mathematics: "수학",
  socialStudies: "사회",
  science: "과학",
  english: "영어",
  music: "음악",
  art: "미술",
  physicalEducation: "체육",
  ethics: "도덕",
  practicalArts: "실과",
};
