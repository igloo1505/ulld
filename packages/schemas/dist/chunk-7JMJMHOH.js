import {
  QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-R4K4LZDW.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-7AUS2GNW.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-LK437WDT.js";

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
//# sourceMappingURL=chunk-7JMJMHOH.js.map