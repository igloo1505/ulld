import {
  TopicUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-JSDPB6RI.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TopicUpdateManyWithWhereWithoutPracticeExamInputSchema;

export {
  TopicUpdateManyWithWhereWithoutPracticeExamInputSchema,
  TopicUpdateManyWithWhereWithoutPracticeExamInputSchema_default
};
//# sourceMappingURL=chunk-DOEDJ5SD.js.map