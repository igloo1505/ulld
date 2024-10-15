import { z } from "zod";
import { subjectZodObject, tagZodObject, topicZodObject } from "./classProps.js";
export const taggableFields = z.object({
    topics: topicZodObject
        .array()
        .default([])
    // .transform((a) => {
    //     return a.map((b) => new Topic(b));
    // })
    ,
    subjects: subjectZodObject
        .array()
        .default([])
    // .transform((a) => {
    //     return a.map((b) => new Subject(b));
    // })
    ,
    tags: tagZodObject
        .array()
        .default([])
    // .transform((a) => {
    //     return a.map((b) => new Tag(b));
    // })
    ,
});
