import {
  TagUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-SJIY747R.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-WN3ARROE.js.map