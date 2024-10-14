import {
  QAPairOrderByRelevanceInputSchema
} from "./chunk-FPWPA4T5.js";
import {
  PracticeExamOrderByRelationAggregateInputSchema
} from "./chunk-3RAFLYCZ.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-TYDF4OCO.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-YD6HBAOC.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-GGRFX4OU.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-ULZ7G2UB.js.map