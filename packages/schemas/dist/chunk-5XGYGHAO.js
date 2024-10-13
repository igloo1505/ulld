import {
  subjectZodObject,
  tagZodObject,
  topicZodObject
} from "./chunk-M5VWJQBY.js";

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
//# sourceMappingURL=chunk-5XGYGHAO.js.map