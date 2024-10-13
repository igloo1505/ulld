import {
  PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-EMPWYCOP.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-VNOUTUHD.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-IO6UUH36.js";

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
//# sourceMappingURL=chunk-SSLZXKZ5.js.map