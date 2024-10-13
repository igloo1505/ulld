import {
  PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema
} from "./chunk-IAB53L54.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-VNOUTUHD.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-IO6UUH36.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;

export {
  PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema,
  PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default
};
//# sourceMappingURL=chunk-CJV7UUZQ.js.map