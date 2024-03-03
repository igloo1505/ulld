
type ValidityResponse = "keep" | "delete"


type TagResponseType = {
    value: string
    practiceExam: {
        id: number;
    }[];
    toDo: {
        id: number;
    }[];
    QAPair: {
        id: string;
    }[];
    bibEntries: {
        id: string;
    }[];
    equations: {
        id: number;
    }[];
    todoList: {
        id: number;
    }[];
}[]

type SubjectResponseType = {
    value: string
    practiceExam: {
        id: number;
    }[];
    toDo: {
        id: number;
    }[];
    QaPair: {
        id: string;
    }[];
    todoList: {
        id: number;
    }[];
}[]


type TopicResponseType = {
    practiceExam: {
        id: number;
    }[];
    toDo: {
        id: number;
    }[];
    QAPair: {
        id: string;
    }[];
    name: string;
    todoList: {
        id: number;
    }[];
}[]

