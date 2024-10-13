import {
  QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-MQWQIRKN.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-MDZ4SLMX.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-XGJ4L2DJ.js";

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
import { z } from "zod";
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([z.lazy(() => QAPairUpdateManyMutationInputSchema), z.lazy(() => QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default = QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema;

export {
  QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema,
  QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema_default
};
//# sourceMappingURL=chunk-V4UIKJJN.js.map