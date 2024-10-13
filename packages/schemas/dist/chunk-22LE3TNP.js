import {
  QAPairOrderByRelevanceInputSchema
} from "./chunk-UGVDDSUI.js";
import {
  PracticeExamOrderByRelationAggregateInputSchema
} from "./chunk-WJ7NONAU.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-UXCYAB7S.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-KN2IVSLJ.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-3PH77TSO.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/QAPairOrderByWithRelationInputSchema.ts
import { z } from "zod";
var QAPairOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  secondaryLabel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => QAPairOrderByRelevanceInputSchema).optional()
}).strict();
var QAPairOrderByWithRelationInputSchema_default = QAPairOrderByWithRelationInputSchema;

export {
  QAPairOrderByWithRelationInputSchema,
  QAPairOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-22LE3TNP.js.map