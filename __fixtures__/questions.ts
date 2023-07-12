import { Question } from "../constants/types";

export const questions: Question[] = [
  {
    id: "1",
    category: {
      id: "1",
      type: "basic",
      subject: {
        id: "1",
        name: "general",
        importance: 3,
      },
      name: "curriculum",
    },
    description: "교육과정 기준의 성격",
    fullContent:
      "국가 수준의 공통성을 바탕으로 지역, 학교, 개인 수준의 다양성을 추구할 수 있도록 학교 교육과정의 기준과 내용에 관한 기본사항을 제시한다.",
    content:
      "국가 수준의 ___을 바탕으로 지역, 학교, 개인 수준의 다양성을 추구할 수 있도록 학교 교육과정의 기준과 내용에 관한 기본사항을 제시한다.",
    answer: "공통성",
    importance: 3,
  },
  {
    id: "2",
    category: {
      id: "1",
      type: "basic",
      subject: {
        id: "1",
        name: "general",
        importance: 3,
      },
      name: "curriculum",
    },
    description: "교육과정 기준의 성격",
    fullContent:
      "국가 수준의 공통성을 바탕으로 지역, 학교, 개인 수준의 다양성을 추구할 수 있도록 학교 교육과정의 기준과 내용에 관한 기본사항을 제시한다.",
    content:
      "국가 수준의 공통성을 바탕으로 지역, 학교, 개인 수준의 ___을 추구할 수 있도록 학교 교육과정의 기준과 내용에 관한 기본사항을 제시한다.",
    answer: "다양성",
    importance: 3,
  },
  {
    id: "3",
    category: {
      id: "1",
      type: "basic",
      subject: {
        id: "1",
        name: "general",
        importance: 3,
      },
      name: "curriculum",
    },
    description: "교육과정 기준의 성격",
    fullContent:
      "학교 교육과정이 학생을 중심에 두고 주도성과 자율성, 창의성의 신장 등 학습자 성장을 지원할 수 있도록 교육과정의 기준과 내용을 제시한다.",
    content:
      "학교 교육과정이 학생을 중심에 두고 ___과 자율성, 창의성의 신장 등 학습자 성장을 지원할 수 있도록 교육과정의 기준과 내용을 제시한다.",
    answer: "주도성",
    importance: 3,
  },
];
