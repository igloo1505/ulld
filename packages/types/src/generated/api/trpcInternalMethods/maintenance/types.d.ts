export type ValidityResponse = "keep" | "delete";
export type TagResponseType = {
    value: string;
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
}[];
export type SubjectResponseType = {
    value: string;
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
}[];
export type TopicResponseType = {
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
}[];
//# sourceMappingURL=types.d.ts.map