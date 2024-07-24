import { TagResponseType, ValidityResponse, SubjectResponseType, TopicResponseType } from "./types";
export declare const databaseCleanValidityCheck: {
    tagsShouldBeDeleted: (t: TagResponseType[number]) => ValidityResponse;
    subjectsShouldBeDeleted: (t: SubjectResponseType[number]) => ValidityResponse;
    topicsShouldBeDeleted: (t: TopicResponseType[number]) => ValidityResponse;
};
//# sourceMappingURL=databaseCleanValidityCheck.d.ts.map