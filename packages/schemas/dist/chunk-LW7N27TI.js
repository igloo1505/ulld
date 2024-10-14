import {
  QAPairOrderByRelationAggregateInputSchema
} from "./chunk-WZDZZT4M.js";
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
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-LW7N27TI.js.map