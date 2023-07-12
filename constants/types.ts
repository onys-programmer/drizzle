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
  category: Category;
};

export type ExerciseStatus = "inProgress" | "completed";

export type AnswerStatus = "correct" | "wrong" | null;
