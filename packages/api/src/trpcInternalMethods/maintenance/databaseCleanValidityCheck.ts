import { TagResponseType, ValidityResponse, SubjectResponseType, TopicResponseType } from "."


export const databaseCleanValidityCheck = {
    tagsShouldBeDeleted: (t: TagResponseType[number]): ValidityResponse => {
        let ks: (keyof typeof t)[] = [
            "toDo",
            "QAPair",
            "todoList",
            "bibEntries",
            "equations",
            "practiceExam",
        ]
        return ks.every((k) => Boolean(!t[k] || t[k].length === 0)) ? "delete" : "keep"
    },
    subjectsShouldBeDeleted: (t: SubjectResponseType[number]): ValidityResponse => {
        let ks: (keyof typeof t)[] = [
            "toDo",
            "todoList",
            "QaPair",
            "practiceExam",
        ]
        return ks.every((k) => Boolean(!t[k] || t[k].length === 0)) ? "delete" : "keep"
    },
    topicsShouldBeDeleted: (t: TopicResponseType[number]): ValidityResponse => {
        let ks: (keyof typeof t)[] = [
            "toDo",
            "todoList",
            "QAPair",
            "practiceExam",
        ]
        return ks.every((k) => Boolean(!t[k] || t[k].length === 0)) ? "delete" : "keep"
    }
}
