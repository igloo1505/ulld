import {
  PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema
} from "./chunk-2CUGK5NM.js";
import {
  PracticeExamScalarWhereInputSchema
} from "./chunk-G5T6CKCO.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-ATBEKMFT.js";

// src/database/inputTypeSchemas/PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema)])
}).strict();
var PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default = PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;

export {
  PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema,
  PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema_default
};
//# sourceMappingURL=chunk-NWMMRPCQ.js.map