import {
  subjectZodObject,
  tagZodObject,
  topicZodObject
} from "./chunk-GD4DYU2D.mjs";

// src/api/prismaMdxRelations/taggables/taggableFields.ts
import { z } from "zod";
var taggableFields = z.object({
  topics: topicZodObject.array().default([]),
  subjects: subjectZodObject.array().default([]),
  tags: tagZodObject.array().default([])
});

export {
  taggableFields
};
//# sourceMappingURL=chunk-J2GCPJDB.mjs.map