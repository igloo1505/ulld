import {
  PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-Q5XEUZHI.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-G5T6CKCO.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-ATBEKMFT.js";

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
//# sourceMappingURL=chunk-GVV5NAAY.js.map