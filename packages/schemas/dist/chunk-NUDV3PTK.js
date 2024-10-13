import {
  PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-4PD4BJYW.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-VNOUTUHD.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-IO6UUH36.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema,
  PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-NUDV3PTK.js.map