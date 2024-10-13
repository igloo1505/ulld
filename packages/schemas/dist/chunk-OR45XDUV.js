import {
  QAPairOrderByRelationAggregateInputSchema
} from "./chunk-GI3YIS3C.js";
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
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema.ts
import { z } from "zod";
var PracticeExamOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  questions: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithRelationInputSchema_default = PracticeExamOrderByWithRelationInputSchema;

export {
  PracticeExamOrderByWithRelationInputSchema,
  PracticeExamOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-OR45XDUV.js.map