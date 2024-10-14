import {
  PracticeExamUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-TV3CC3FD.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-G5T6CKCO.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-ATBEKMFT.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutTagsInputSchema;

export {
  PracticeExamUpdateManyWithWhereWithoutTagsInputSchema,
  PracticeExamUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-6LCN5MBO.js.map