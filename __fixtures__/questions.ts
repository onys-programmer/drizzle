type importancePoint = number;

type importanceDegree = 1 | 2 | 3 | 4 | 5;

type CategoryType =  'basic' | 'specifics'

type CategoryName = 'curriculum' | 'contentStructure' | 'achievementStandard' | 'instructionModel'

type SubjectName = 'korean' | 'mathematics' | 'socialStudies' | 'science' | 'english' | 'music' | 'art' | 'physicalEducation' | 'ethics' | 'practicalArts'

type SubjectImportance = {
    SubjectName: {
        CategoryName: number;
    }
}

type Subject = {
    id: string;
    name: SubjectName;
    importance: importanceDegree;
}

type Category = {
    id: string;
    type: CategoryType;
    subject: Subject;
    name: CategoryName;
}

type Question = {
    id: string;
    content: string;
    answer: string;
    importance: importanceDegree;
    category: Category;
}

const questions: Question[] = [];