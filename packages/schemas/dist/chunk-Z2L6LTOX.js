import {
  PracticeExamUncheckedUpdateManyInputSchema
} from "./chunk-HM7SRNKK.js";
import {
  PracticeExamUpdateManyMutationInputSchema
} from "./chunk-ATBEKMFT.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/PracticeExamUpdateManyArgsSchema.ts
import { z } from "zod";
var PracticeExamUpdateManyArgsSchema = z.object({
  data: z.union([PracticeExamUpdateManyMutationInputSchema, PracticeExamUncheckedUpdateManyInputSchema]),
  where: PracticeExamWhereInputSchema.optional()
}).strict();
var PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema;

export {
  PracticeExamUpdateManyArgsSchema,
  PracticeExamUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-Z2L6LTOX.js.map