import {
  PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-OVCUA5PG.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-G5T6CKCO.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-ATBEKMFT.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema,
  PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-5JAWZZHI.js.map