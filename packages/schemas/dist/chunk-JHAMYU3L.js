import {
  TopicUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-I2UAUEZ6.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

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
//# sourceMappingURL=chunk-JHAMYU3L.js.map