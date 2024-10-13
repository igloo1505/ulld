import {
  PracticeExamUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-3Z3DYWIY.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-VNOUTUHD.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-IO6UUH36.js";

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
//# sourceMappingURL=chunk-CVT55RFD.js.map