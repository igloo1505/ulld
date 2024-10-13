import {
  SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-ENITV2F6.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default = SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema,
  SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema_default
};
//# sourceMappingURL=chunk-NAOJFZ5W.js.map