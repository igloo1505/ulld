import {
  PracticeExamListRelationFilterSchema,
  QAPairWhereInputSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/QAPairWhereUniqueInputSchema.ts
import { z } from "zod";
var QAPairWhereUniqueInputSchema = z.union([
  z.object({
    id: z.string(),
    question: z.string()
  }),
  z.object({
    id: z.string()
  }),
  z.object({
    question: z.string()
  })
]).and(z.object({
  id: z.string().optional(),
  question: z.string().optional(),
  AND: z.union([z.lazy(() => QAPairWhereInputSchema), z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => QAPairWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QAPairWhereInputSchema), z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  answer: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  secondaryLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  correctCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional()
}).strict());
var QAPairWhereUniqueInputSchema_default = QAPairWhereUniqueInputSchema;

export {
  QAPairWhereUniqueInputSchema,
  QAPairWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-Q3EJFDQJ.js.map