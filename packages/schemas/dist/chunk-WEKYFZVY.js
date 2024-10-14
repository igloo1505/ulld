import {
  SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema
} from "./chunk-GIBHB7KE.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-WEKYFZVY.js.map