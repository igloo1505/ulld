import {
  TagUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-EF6UC2PH.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default = TagUpdateManyWithWhereWithoutPracticeExamInputSchema;

export {
  TagUpdateManyWithWhereWithoutPracticeExamInputSchema,
  TagUpdateManyWithWhereWithoutPracticeExamInputSchema_default
};
//# sourceMappingURL=chunk-PMCHPDO2.js.map